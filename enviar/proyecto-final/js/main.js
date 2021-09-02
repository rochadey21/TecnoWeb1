
var bur = document.querySelector(".bur");
var lug= document.querySelector(".lugares");
var enlaces = document.querySelector(".menu");
var enlaces2=document.querySelector(".sub-menu");
var barras= document.querySelectorAll(".bur span");

bur.addEventListener('click', () => {
    enlaces.classList.toggle("activado");
    barras.forEach(child => {child.classList.toggle("animado")});
});

lug.addEventListener('click', () => {
    enlaces2.classList.toggle("activado");
    lug.forEach(child => {child.classList.toggle("animado")});
});
