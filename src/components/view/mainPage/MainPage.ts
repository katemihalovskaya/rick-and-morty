import './MainPage.css';

class MainPage {

    draw() {
        document.body.innerHTML =  `
            <div class="wrapper">
            <header class="header">
                <div class="header-image">
                    <img src="./assets/header.png" alt="rick and morty">
                </div>
            </header>
            <main class="page">
                <div class="page-gallery"></div>
                <div class="loader"></div>
                <div class="modal"></div>
            </main>
        </div>`;
    }
}

export default MainPage;
