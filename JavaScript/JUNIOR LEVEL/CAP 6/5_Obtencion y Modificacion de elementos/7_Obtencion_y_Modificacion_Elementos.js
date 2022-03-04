const titulo = document.querySelector('#titulo');

let content = titulo.textContent; // no importa si el contenido esta oculto, lo captura
alert(content);

content = titulo.innerText; // no se usa casi
document.write('<br>'+content);

content = titulo.outerText; // no se usa
document.write('<br>'+content);

content = titulo.innerHTML; 
alert('<br>'+content);

content = titulo.outerHTML;
alert('<br>'+content); // muestra todo el contenido html incluyendo el de las propias etiquetas