document.addEventListener("DOMContentLoaded", function () {
    const headerHeight = document.querySelector(".header").offsetHeight; 
    const menuLinks = document.querySelectorAll(".menu__link"); 

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 

            const targetId = this.getAttribute("href").substring(1); 
            const targetElement = document.getElementById(targetId); 

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - headerHeight - 20; 

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth" 
                });
            }
        });
    });

    const headerLinks = document.querySelectorAll('.header__nav a');
    headerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElem = document.querySelector(targetId);
            if (targetElem) {
                targetElem.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
