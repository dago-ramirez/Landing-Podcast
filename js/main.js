// let posicionYPrincipal = window.pageYOffset;
// console.log("posición y principal " + posicionYPrincipal)
// window.addEventListener("scroll", function() {
//     let posicionYActual = window.pageYOffset;
//     console.log("posición y actual " + posicionYActual)
//     if (posicionYPrincipal >= posicionYActual) {
//         document.getElementsByClassName("nav-section")[0].style.top = "0px"
//     }else {
//         document.getElementsByClassName("nav-section")[0].style.top = "-100px"
//     }
//     posicionYPrincipal = posicionYActual;
// })

let linksNav = document.querySelectorAll(".links-nav")[0];
let conmutar = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    linksNav.classList.toggle("menu-expandido");
})