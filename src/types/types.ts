export interface CharactersResponse {
    info: Info,
    results: Characters
}

export interface Info {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: Origin,
    location: Location,
    image: string,
}

interface Origin {
    name: string,
    url: string
}

interface Location {
    name: string,
    url: string
}

export type Characters = Array<Character>

export type ApiResponse = Response

export interface LoaderOptions {
    [key: string]: string;
}

export type DefaultGalleryCharactersCallback = (data: CharactersResponse) => void;
export type DefaultCharacterCallback = (data: Character) => void;
