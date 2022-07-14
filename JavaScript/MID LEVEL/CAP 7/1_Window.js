let YTURL = 'https://youtube.com';

// let ventanta = window.open(YTURL);
// console.log(ventanta.closed)

// ventanta.close();
// console.log(ventanta.closed);

// window.stop();   interrumpe la carga de la pagina
// alert('hola');   crea una alerta
// print();     imprime la pagina
// prompt('Ingresa un dato');   entrada de datos por un tipo de alert 

// let respuesta = confirm('¿Estas seguro que deseas salir del sitio web?');
// console.log(respuesta);

// const screen = window.screen;

console.log(screen); //objeto Screen con sus propiedades
console.log('screenLeft: ',screenLeft);
console.log('screenTop: ',screenTop); // solo son porpiedades de lectura

const scrollX = window.scrollX;
console.log(scrollX); // muestra la cantidad de pixeles que nos desplazamos hacia el eje horizontal X

let scrollY = window.scrollY;
console.log(scrollY); // muestra la cantidad de pixeles que nos desplazamos hacia abajo, el eje Y

window.scrollTo({
    top: 500,
    behavior:"smooth"
});

// window.resizeBy(100,200);
// window.resizeTo(100,200);
// window.moveBy(100,200);
// window.moveTo(100,200);

console.log(window.locationbar.visible); 
console.log(window.menubar.visible); 
console.log(window.personalbar.visible); 
console.log(window.scrollbars.visible); 
console.log(window.toolbar.visible); 
