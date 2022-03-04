
const titulo = document.getElementById('titulo');

titulo.classList.add('grande'); // añade la clase grande

titulo.classList.remove('big'); // elimina la clase grande

let valor = titulo.classList.item(0); // nos devuelve el nombre de la primera clase, esto no afecta las clases, solo pide la info y la devuelve
document.write(valor+ '<br>');

let className = 'bouth';
let value = titulo.classList.contains(className); // si la clase existe devuelve true, sino false

titulo.classList.toggle('drugs'); // si la clase existe la elimina y devuelve false, sino la agraga y devuelve true, aqui se agrega

titulo.classList.toggle('drugs'); // si la clase existe la elimina y devuelve false, sino la agraga y devuelve true, aqui se elimina

titulo.classList.replace('bag','rancio'); // remplaza una clase por otra
