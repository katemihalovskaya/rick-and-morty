import { Character } from "../../types/types";
import AppView from "../view/AppView";
import AppController from "./AppController";

class ModalController {

    private controller: AppController;
    private view: AppView;

    constructor(controller: AppController, view: AppView) {
        this.controller = controller;
        this.view = view;
    }

    open(e: Event) {
        const modal = document.querySelector('.modal') as HTMLElement;
        const gallery = document.querySelector('.page-gallery') as HTMLElement;

        this.controller.getCharacter(e, (data: Character) => {
            this.view.drawModal(data);
            modal.style.display = "block";
            document.body.classList.add('modal-open');
            gallery.classList.add('disable');

            this.initCloseListeners();
        });
    }

    private initCloseListeners() {
        const modal = document.querySelector('.modal') as HTMLElement;
        const closeBtn = document.querySelector('.close-btn') as HTMLElement;
        

        document.addEventListener('click', (e) => {
            const target = e.target as Element;
            if (!modal.contains(target)) {
                this.closeWindow();
            }
        });

        closeBtn.addEventListener('click', this.closeWindow);  
    }

    private closeWindow() {
        const gallery = document.querySelector('.page-gallery') as HTMLElement;
        const modal = document.querySelector('.modal') as HTMLElement;

        modal.style.display = "none";
        document.body.classList.remove('modal-open');
        gallery.classList.remove('disable');
    }
}

export default ModalController;
