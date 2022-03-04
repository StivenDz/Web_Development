
const input = document.querySelector('.input-normal');

document.write(input.className + '<br>');
document.write(input.value+ '<br>');
input.type = 'file'
input.accept = 'image/png'

input.type = 'text'
input.minLength = '8'
input.placeholder = 'Nombre completo'
input.required = 'true'