import { CharactersResponse } from "../../types/types";
import AppController from "../controller/AppController";
import ModalController from "../controller/ModalController";
import AppView from "../view/AppView";

const DEFAULT_PAGE = 1;

class App {
    private page: number;
    private maxPage: number;
    private view: AppView;
    private controller: AppController;
    private modal: ModalController;

    constructor() {
        this.page = DEFAULT_PAGE;
        this.maxPage = DEFAULT_PAGE;
        this.view = new AppView();
        this.controller = new AppController();
        this.modal = new ModalController(this.controller, this.view);
    }

    start() {
        this.initMainPage();
    }

    initMainPage() {
        this.view.drawMainPage();
        this.initGallery(this.page);
        this.initModalListener();
    }

    private initGallery(page: number) {
        const loader = document.querySelector('.loader') as HTMLElement;

        this.controller.getCharacters(page, (data: CharactersResponse) => { 
            const characters = data.results;
            this.maxPage = data.info.pages;
            this.view.drawGallery(characters);
        });

        window.addEventListener('scroll', () => {
            if (this.page < this.maxPage && window.innerHeight + window.scrollY >= document.body.scrollHeight) {
                this.page += 1;
    
                loader.style.display = 'block';
                this.controller.getCharacters(this.page, (data: CharactersResponse) => {
                    loader.style.display = 'none';
                    const characters = data.results;
                    this.maxPage = data.info.pages;
                    this.view.drawGallery(characters);
                });
            }
        });
    }

    private initModalListener() {
        const gallery = document.querySelector('.page-gallery') as HTMLElement;
        gallery.addEventListener('click', (e) => this.modal.open(e));
    }
}

export default App;
