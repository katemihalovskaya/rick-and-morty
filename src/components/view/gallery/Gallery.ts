import { Characters } from '../../../types/types';
import './Gallery.css';

class Gallery {

    draw(characters: Characters, redrawGallery: boolean) {
        
        const gallery = document.querySelector('.page-gallery') as HTMLElement;

        let content = `
            <div class="gallery-nav" ${!redrawGallery ? 'style="display: none;"' : ''}>
                <button class="prev-btn">PREV</button>
                <button class="next-btn">NEXT</button>
            </div>
            <div class="gallery-content">
        `;

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

        content += `</div>`;

        if (redrawGallery) {
            gallery.innerHTML = content;
        } else {
            gallery.innerHTML += content;
        }
        
    }
}

export default Gallery;
