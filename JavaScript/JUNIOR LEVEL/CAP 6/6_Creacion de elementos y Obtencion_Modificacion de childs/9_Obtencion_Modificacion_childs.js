const cont = document.querySelector('.contenedor');

let primerHijo = cont.firstChild; // para poder obtenerlo no debemosd ejar espacio entre el cont y el first child
let lastHijo = cont.lastChild; // para poder obtenerlo no debemosd ejar espacio entre el cont y el last child

// console.log(primerHijo);
// console.log(lastHijo);

primerHijo = cont.firstElementChild; // obtiene el primero elemento hijo sin importar los espacios
console.log(primerHijo);
lastHijo = cont.lastElementChild; // obtiene el ultimo elemento hijo sin importar los espacios
console.log(lastHijo);

let hijos = cont.childNodes; // nos devuelve una nodeList con los espacios que son text, no es una lista pero se puede recorrer con un foreach
console.group(hijos)
hijos.forEach(hijo => {
    console.log(hijo)
});
console.groupEnd();
let children = cont.children; // devuelve los elementos hiijos del cont, no se puede recorrer con foreach, pero si con forOf
console.group(children)
for (const i of children) {
    console.log(i)
}
console.groupEnd();