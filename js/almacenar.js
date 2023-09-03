let listado = [];
const inputItem = document.getElementById('item');
const submitButton = document.getElementById('agregar');
const clearButton = document.getElementById('limpiar');
const form = document.getElementById('form');
let contenedor = document.getElementById('contenedor');

function actualizar (){
    contenedor.innerHTML= '';
    inputItem.value = '';
    listado.forEach((elemento)=>{
        let li_ = document.createElement('li');
        li_.textContent = elemento;
        contenedor.appendChild(li_);
    })
}

document.addEventListener('DOMContentLoaded', function(){
    if(localStorage.getItem("listado")){
        listado = localStorage.getItem("listado")
        listado = JSON.parse(listado)
    }else{
        localStorage.setItem("listado", JSON.stringify([]));
    }
    actualizar();
    
});

submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let item = inputItem.value;
    if(item !== ''){
        listado.push(item);
        localStorage.setItem("listado", JSON.stringify(listado));
    }
    actualizar();
    form.reset();
});
clearButton.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.setItem("listado", JSON.stringify([]));
    listado = [];
    actualizar();
});
