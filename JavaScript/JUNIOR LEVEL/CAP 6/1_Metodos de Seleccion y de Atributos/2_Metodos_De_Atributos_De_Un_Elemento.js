// Metodos para Definir, obtener y Eliminar valores de atributos.

const rangoEtario = document.querySelector('.rangoEtario');

// setattribute()
rangoEtario.setAttribute('type','range'); // no solo los cambia, sino que tambien los crea

// getattribute()
const attributeRE = rangoEtario.getAttribute('type');
document.write('<br> rangoEtario es de tipo '+attributeRE);

// removeAttribute()
rangoEtario.removeAttribute('type');