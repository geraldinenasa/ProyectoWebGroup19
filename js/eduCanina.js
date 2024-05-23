// Script para animaciones con el evento scroll
const scrollElements = document.querySelectorAll(".js-scroll");

// funcion para verficar si el elemento esta en vista
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

// funcion para ver si el elemento esta fuera de vista
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};


const displayScrollElement = (element) => { //muestra el elemento agregando la clase scrolled
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => { // oculta el elemnto quitando la clase scrolled
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => { //manejo de animacion haciendo scroll
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  });
};

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});