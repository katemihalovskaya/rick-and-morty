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
                <div class="page-options">
                    <label class="switch">
                        <input class="checkbox" type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <div class="gallery-nav">
                        <button class="prev-btn">PREV</button>
                        <button class="next-btn">NEXT</button>
                    </div>
                </div>
                <div class="page-gallery"></div>
                <a id="toTop" href="#"><img src="./assets/arrow_up.svg" alt="Up"></a>
                <div class="loader"></div>
                <div class="modal"></div>
            </main>
        </div>`;
    }
}

export default MainPage;
