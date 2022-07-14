// contact()
console.clear();
let cadena = 'Cadena de prueba prueba prueba';

console.log(cadena.concat(' Hola'));

let otraCadena = ' y esta es otra Cadena';
console.log(cadena.concat(otraCadena));

// startsWith()
let cade = 'Cad'

console.log(cadena.startsWith(otraCadena))
console.log(cadena.startsWith(cade))

// endsWith()

let cade2 = 'ena'

console.log(otraCadena.endsWith(cade2))

// includes()

console.log(cadena.includes('  '))
console.log(cadena.includes(cade))

// indexOf()

console.log(cadena.indexOf('pru')) // la primera posicion de la primera letra del texto enviado como argumento en este caso la 'p'

// lastIndexOf()

console.log(cadena.lastIndexOf('pru')) // la ultima posicion de la primera letra del texto enviado como argumento en este caso la 'p'

// padStart()
let cad = 'ABC'

console.log(cad.padStart(6,'a')) // rellena hasta que contenga 6 caracteres con a al principio

// padEnd()

console.log(cad.padEnd(19,'DFGHIJKLMNÑOPQRSTUVWXYZ')) //rellena hasta que contenga 6 caracteres con el abecedario al final

// repeat()

console.log(cad.concat(' ').repeat(5))

// split()

console.log(cadena.split(' ')) // se divide cada que encuentra un espacio, o lo que coloquemos entre los parametros y devuelve un array

let resultado = cadena.split(' ')
console.log(resultado[1])

// substring()
let abc = 'DFGHIJKLMNÑOPQRSTUVWXYZ'
console.log(abc.substring(2,9))

// toLowerCase()

console.log(abc.toLowerCase())

// toUpperCase()

console.log(cadena.toUpperCase())

// toString()

let numero = 3540
let res = numero.toString();
console.log(2 + res) // aqui se comprueba que es una cadena
console.log(2 * res) // aqui lo toma como numero
console.log(2 / res) // aqui lo toma como numero

// trim()

let cce = '    hola     '
console.log(cce.length) //13
console.log(cce.trim().length) // 4/ elimina los espacios

// trimStart() elimina los espacios del principio
// trimEnd() elimina los espacios del final



