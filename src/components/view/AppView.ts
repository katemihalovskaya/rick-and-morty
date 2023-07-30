import { Character, Characters } from "../../types/types";
import Gallery from "./gallery/Gallery";
import MainPage from "./mainPage/MainPage";
import Modal from "./modalWindow/ModalWindow";


export class AppView {
    private mainPage: MainPage;
    private gallery: Gallery;
    private modal: Modal;
    

    constructor() {
        this.mainPage = new MainPage();
        this.gallery = new Gallery();
        this.modal = new Modal();
       
    }

    drawMainPage() {
        this.mainPage.draw();
    }

    drawGallery(characters: Characters) {
        this.gallery.draw(characters);
    }

    drawModal(character: Character) {
        this.modal.draw(character);
    }
}

export default AppView;

