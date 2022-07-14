//   Document - Metodos de Selección de elenentos

let parrafo = document.getElementById('parrafo');
document.write(parrafo);

parrafo = document.getElementsByTagName('p');
document.write('<br>'+parrafo[0]); // devuelve una lista, una coleccion html, lesecciona todos los elementos p

parrafo = document.querySelector('#parrafo');
document.write('<br>'+parrafo);

parrafo = document.querySelectorAll('#parrafo');
document.write('<br>'+parrafo[0], parrafo.length);