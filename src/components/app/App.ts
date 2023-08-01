import { CharactersResponse, Info } from "../../types/types";
import AppController from "../controller/AppController";
import ModalController from "../controller/ModalController";
import PagingController from "../controller/PagingController";
import AppView from "../view/AppView";

const DEFAULT_PAGE = 1;

class App {
    private page: number;
    private maxPage: number;
    private view: AppView;
    private controller: AppController;
    private modal: ModalController;
    private pagingController: PagingController;

    constructor() {
        this.page = DEFAULT_PAGE;
        this.maxPage = DEFAULT_PAGE;
        this.view = new AppView();
        this.controller = new AppController();
        this.modal = new ModalController(this.controller, this.view);
        this.pagingController = new PagingController();
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
        const switchInput = document.querySelector('.checkbox') as HTMLInputElement;

        this.controller.getCharacters(page, (data: CharactersResponse) => this.drawGallery(data, false));

        window.addEventListener('scroll', this.scroll.bind(this));

        switchInput.addEventListener('change', () => {          
            if (switchInput.checked === true) {
                this.controller.getCharacters(page, (data: CharactersResponse) => { 
                    this.drawGallery(data, true);
                    this.initPagingListeners();
                    this.disablePagingButtons(data.info);
                    window.removeEventListener('scroll', this.scroll.bind(this));
                    const navItems = document.querySelector('.gallery-nav') as HTMLElement;
                    navItems.style.display = 'block';
                });
            } else {
                const navItems = document.querySelector('.gallery-nav') as HTMLElement;
                navItems.style.display = 'none';
                window.addEventListener('scroll', this.scroll.bind(this));
            }
        });
    }

    private initPagingListeners() {
        const nextBtn = document.querySelector('.next-btn') as HTMLElement;
        const prevBtn = document.querySelector('.prev-btn') as HTMLElement;

        nextBtn.addEventListener('click', () => {
            this.page += 1;
            prevBtn.removeAttribute('disabled');
            this.controller.getCharacters(this.page, (data: CharactersResponse) => {
                this.drawGallery(data, true);
                this.initPagingListeners();
                this.disablePagingButtons(data.info);
            });
        });

        prevBtn.addEventListener('click', () => {
            this.page -= 1;
            nextBtn.removeAttribute('disabled');
            this.controller.getCharacters(this.page, (data: CharactersResponse) => {
                this.drawGallery(data, true);
                this.initPagingListeners();
                this.disablePagingButtons(data.info);
            });
        });
    }

    private disablePagingButtons(info: Info) {
        const nextBtn = document.querySelector('.next-btn') as HTMLElement;
        const prevBtn = document.querySelector('.prev-btn') as HTMLElement;

        if (!info.next) {
            nextBtn.setAttribute('disabled', 'disabled');
        }
        if (!info.prev) {
            prevBtn.setAttribute('disabled', 'disabled');
        }
    }

    private scroll() {
        if (this.page < this.maxPage && window.innerHeight + window.scrollY + 0.5 >= document.body.scrollHeight) {
            const loader = document.querySelector('.loader') as HTMLElement;

            this.page += 1;

            loader.style.display = 'block';
            this.controller.getCharacters(this.page, (data: CharactersResponse) => {
                loader.style.display = 'none';
                this.drawGallery(data, false);
            });
        }
        this.pagingController.initScrollTop();
    }

    private drawGallery(data: CharactersResponse, redrawGallery: boolean) {
        const characters = data.results;
        this.maxPage = data.info.pages;
        this.view.drawGallery(characters, redrawGallery);
    }

    private initModalListener() {
        const gallery = document.querySelector('.page-gallery') as HTMLElement;
        gallery.addEventListener('click', (e) => this.modal.open(e));
    }
}

export default App;
