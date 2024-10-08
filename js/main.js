import { agregarALaLista, agregarParrafo, creaConEstilo } from "./creacion.js";

function mostrarNombre() {
    let nombre = "Jaime Prieto Rubio";
    document.body.appendChild(creaConEstilo(nombre));

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


window.agregarUnParrafo = agregarUnParrafo;
window.aniadirALaLista = aniadirALaLista;
window.mostrarNombre = mostrarNombre;
