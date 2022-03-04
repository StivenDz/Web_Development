const cont = document.querySelector('.contenedor');

const textItem = document.createTextNode('Este es un item e la lista');

const fragment = document.createDocumentFragment();

// item.appendChild(textItem);

for (let i = 0; i < 20; i++) {
    const item = document.createElement('LI');
    item.innerHTML = 'este es un item de la lista';
    fragment.appendChild(item);
}

//cont.appendChild(fragment);

