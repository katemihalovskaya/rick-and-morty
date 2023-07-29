import './MainPage.css';

class MainPage {

    draw() {
        document.body.innerHTML =  `
            <div class="wrapper">
            <header>
                <h1></h1>
            </header>
            <main class="page">
                <div class="gallery"> 
                </div>
            </main>
        </div>`;
    }
}

export default MainPage;
