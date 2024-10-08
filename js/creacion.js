//funcion de añadir con estil
export function creaConEstilo(nombre) {
  let div = document.createElement("div");
  div.style.fontWeight = "bold";
  div.style.fontSize = "100px";
  div.style.color = "red";
  div.style.display = "block";
  div.innerText = nombre;
  div.id="divEstiloso";
  return div;
}

//Funcion que agrea un parrafo al darle al boton
export function agregarParrafo(parrafo) {
  //1. - Seleccionar el elemento HTML donde vamos a añadir parrafo
  // let contenedor = document.querySelector("#contenedor"); //Sirve para seleccionar el parrafo
  //2. - Crear el elemento HTML
  let p = document.createElement("p");
  //3. - Añadir el contenido (lorem) al p
  p.innerText = parrafo;
  //4. - Añadir el p al elemento seleccionado en el paso 1
  return p
}

//funcion de la lista
export function agregarALaLista(articulo) {

  if (articulo !== null) {
    //let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerText = articulo;
    //ul.append(li);
    return li;
  }
}