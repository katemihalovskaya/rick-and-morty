import { Characters } from '../../../types/types';
import './Gallery.css';

class Gallery {

    draw(characters: Characters) {
        
        const gallery = document.querySelector('.page-gallery') as HTMLElement;

        let content = '';

        characters.forEach(character => {
            const {id, name, image} = character;
            content += `
                <div class="item" char-id="${id}">
                    <div class="item-image">
                        <img src=${image} alt="start">
                    </div>
                    <div class="item-name">${name}</div>
                </div>
            `;
        });

        gallery.innerHTML += content;
    }
}

export default Gallery;
