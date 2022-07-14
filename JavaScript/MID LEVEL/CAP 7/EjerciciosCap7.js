// Ejercicio 1, mostrar la resolucion de la pantalla


// let alto = screen.availHeight;
// let ancho = screen.availWidth;

let alto = screen.height;
let ancho = screen.width;

let comprar = confirm(`El alto es de: ${alto}\nEl ancho es de: ${ancho}`);

if(comprar){
    console.log('Compra realizada con Exito!');
}else{
    console.log('Compra Cancelada'); 
};


// comprar ? console.log('Compra realizada con Exito!') : console.log('Compra Cancelada'); 

// Ejercicio 2, proporcionar informacion


const href = window.location.href;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const protocol = window.location.protocol;

let html = `Protocolo: ${protocol}\n`;
html += `HostName: ${hostname}\n`;
html += `PathName: ${pathname}\n`;
html += `Url Completa: ${href}`;

console.log(html)