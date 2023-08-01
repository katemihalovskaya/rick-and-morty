class PagingController {
    initScrollTop() {
        const toTop = document.getElementById("toTop") as HTMLElement;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
        
        toTop.addEventListener('click', (e) => {
            e.preventDefault(); 
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

export default PagingController;
