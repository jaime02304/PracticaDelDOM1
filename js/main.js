import { agregarALaLista, agregarParrafo, creaConEstilo } from "./creacion.js";

function mostrarNombre() {
    let nombre = "Jaime Prieto Rubio";
    document.body.appendChild(creaConEstilo(nombre));
    document.querySelector('button[disabled]').disabled = false;

}

function agregarUnParrafo() {
    let parrafo = "🍆🍑";
    let p = agregarParrafo(parrafo);
    let contenedor = document.querySelector("#contenedor");
    contenedor.appendChild(p);
}

function aniadirALaLista() {
    let articulo = prompt("puedes darme un articulo", "Primera opcion");
    let li = agregarALaLista(articulo);
    let ul = document.querySelector("ul");
    ul.appendChild(li);

}

function changeStyle() {
    let divEstiloso = document.querySelector("#divEstiloso");
    let boton = document.querySelector("#botonCambiaColor");
    //TextContent te devuelve el contenido que haya escrito en el elemento y se puede cambiar o utilizar con comparacion
    if (boton.textContent == "Cambiar a azul") {
        boton.textContent = "Cambiar a rojo"
        divEstiloso.style = "color:blue;"
        divEstiloso.style.fontWeight = "bold";
        divEstiloso.style.fontSize = "100px";
    } else if (boton.textContent == "Cambiar a rojo") {
        boton.textContent = "Cambiar a azul"
        divEstiloso.style = "color:red;"
        divEstiloso.style.fontWeight = "bold";
        divEstiloso.style.fontSize = "100px";
    }

}


window.agregarUnParrafo = agregarUnParrafo;
window.aniadirALaLista = aniadirALaLista;
window.mostrarNombre = mostrarNombre;
window.changeStyle = changeStyle;