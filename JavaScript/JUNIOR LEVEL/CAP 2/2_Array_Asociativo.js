
let pc1 = {
    nombre: 'StivenRoot',
    procesador: 'Intel Core I7',
    ram: '16GB',
    espacio: '1TB',
}

let pc2 = ["StivenRoot","Intel Core I7","16GB","1TB"]

// para pc2 podriamos acceder dee sta forma alert(pc2[0]), pero para pc1 no, se haria de la siguiente forma

document.write(pc1['nombre']);