const href = window.location.href;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const protocol = window.location.protocol;


console.log('window.location.href: ', href); // muestra la url completa
console.log('window.location.hostname: ',hostname); // devuelve el nombre del dominio del servidor web
console.log('window.location.pathname: ',pathname); // devuelve la ruta y el nombre del archivo de la pagina actual
console.log('window.location.protocol: ',protocol); // devuelve el protocolo web utilizado http / https


// window.location.assign('https://www.youtube.com');