import { Character, DefaultCharacterCallback, DefaultGalleryCharactersCallback } from "../../types/types";
import AppLoader from "./AppLoader";

class AppController extends AppLoader {
    getCharacters(page: number, callback: DefaultGalleryCharactersCallback) {
        super.getResp({ endpoint: 'character', options: {page: page}}, callback);
    }

    getCharacter(e: Event, callback: DefaultCharacterCallback) {
        const targetEl = e.target as HTMLElement;
    
        const item = targetEl.closest('.item'); 
        if (!item) return;

        const itemId = item.getAttribute('char-id');
        super.getResp<Character>({endpoint: `character/${itemId}`}, callback);
    }
}

export default AppController;
