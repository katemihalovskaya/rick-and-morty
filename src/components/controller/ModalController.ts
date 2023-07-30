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

        this.controller.getCharacter(e, (data: Character) => {
            this.view.drawModal(data);
            modal.classList.add('visible');
        });
    }

    close() {
        const modal = document.querySelector('.modal') as HTMLElement;
        window.onclick = (event) => {
            if (event.target == modal) {
              modal.style.display = "none";
              document.body.classList.remove('modal-open');
            }
        }
    }
}

export default ModalController;
