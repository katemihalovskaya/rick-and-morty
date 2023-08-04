import { ApiResponse, LoaderOptions } from "../../types/types";

const FIRST_URL_IND = 0;
const LAST_URL_IND = -1;

class Loader {
    private baseLink: string;

    constructor(baseLink: string) {
        this.baseLink = baseLink;
    }

    getResp<T>(
        { endpoint = '', options = {} },
        callback: (data: T) => void
    ) {
        this.load<T>('GET', endpoint, callback, options);
    }

    errorHandler(res: ApiResponse) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            }
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: LoaderOptions, endpoint: string) {
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(options).forEach((key) => {
            url += `${key}=${options[key]}&`;
        });

        return url.slice(FIRST_URL_IND, LAST_URL_IND);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
          .then(this.errorHandler)
          .then((res) => res.json())
          .then((data: T) => callback(data))
          .catch(<R>(err: R) => console.error(err));
    }
}

export default Loader;
