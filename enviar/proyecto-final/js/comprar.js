
let numero=0;

function contar()
{
    numero=numero+1;
    
    document.querySelector(".numero").innerText = numero;
}

function menos()
{
    
    numero=numero-1;
    document.querySelector(".numero").innerText = numero;
}
var p=document.querySelectorAll(".numero");
