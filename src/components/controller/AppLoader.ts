import Loader from './Loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rickandmortyapi.com/api/');
    }
}

export default AppLoader;
