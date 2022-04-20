const boton = document.getElementById('boton');
const navMenu = document.getElementById('nav-menu');

boton.addEventListener("click", () => {

navMenu.classList.toggle("nav-menu_visible");

if(navMenu.classList.contains("nav-menu_visible")){
    boton.setAttribute("aria-label", "Cerrar menu");
}else{
    boton.setAttribute("aria-label", "abrir menu");
}


});