document.addEventListener("DOMContentLoaded", function () {
  // === Прокрутка по меню ===
  const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
  const menuLinks = document.querySelectorAll(".menu__link");
  menuLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
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



  const buttonScroll = document.getElementById("button-scroll");

  if (!headerHeight || !buttonScroll) {
    console.warn("Не знайдено header або button-scroll");
    return;
  }


  function handleScrollToggle() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
      buttonScroll.style.opacity = "1";
    } else {
      buttonScroll.style.opacity = "0";
    }
  }

  window.addEventListener("scroll", handleScrollToggle);
    handleScrollToggle(); 
  buttonScroll.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});