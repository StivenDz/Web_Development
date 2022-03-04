const titulo = document.querySelector('.titulo');

titulo.setAttribute('contentEditable','false'); // hace que el contenido sea editable si es true

titulo.setAttribute('dir','ltr'); // direccion, left to rigth/ rigth to left

titulo.removeAttribute('hidden'); // titulo.setAttribute('hidden','false') no importa que no tenga valor, se oculta

titulo.setAttribute('tabindex','3')

titulo.setAttribute('title','titulo rancioo')