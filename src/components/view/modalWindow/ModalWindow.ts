import { Character } from "../../../types/types";
import './ModalWindow.css';

class Modal {

    draw(character: Character) {
        const modalContent = document.querySelector('.modal') as HTMLElement;
        const { name, status, species, origin, location, gender, image } = character;
        modalContent.innerHTML = `
            <div class="modal-content">
                <div class="modal-image"><img src=${image} alt="${name}"></div>
                <ul class="modal-info info">
                    <li class="info-name"><span class="bold">Name</span>: ${name}</li>
                    <li class="info-status"><span class="bold">Status</span>: ${status}</li>
                    <li class="info-species"><span class="bold">Species</span>: ${species}</li>
                    <li class="info-origin"><span class="bold">Origin</span>: ${origin.name}</li>
                    <li class="info-location"><span class="bold">Location</span>: ${location.name}</li>
                    <li class="info-gender"><span class="bold">Gender</span>: ${gender}</li>
                </ul>
                <span class="close-btn">&times;</span>
            </div>
        `
    }
}

export default Modal;
