const cont = document.querySelector('.contenedor');

const parrafo = document.createElement('P');
const h2_nuevo = document.createElement('H2');

const h2_antiguo = document.querySelector('.antiguo');

parrafo.innerHTML = 'pararfo';
h2_nuevo.innerHTML = 'titulo';

// cont.replaceChild(h2_nuevo,h2_antiguo);

// cont.removeChild(h2_antiguo);

let respuesta = cont.hasChildNodes();

if (respuesta) {
    document.write('El elemento tiene hijos')
}else{
    document.write('El elemento no tine hijos')
}

// Propiedades de paretns

console.log(h2_antiguo.parentElement) // nos muestra el padre
console.log(cont.parentNode) // nos muestra el padre

// Propiedades de hijos

console.log(h2_antiguo.nextSibling);
console.log(h2_antiguo.previousSibling);
console.log(h2_antiguo.nextElementSibling);
console.log(h2_antiguo.previousElementSibling);

console.log(h2_antiguo.closest('.contenedor')); // busca el contenedor mas cercano que contenga ese elemento