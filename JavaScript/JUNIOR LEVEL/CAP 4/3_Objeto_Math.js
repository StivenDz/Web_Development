// for (let i = 0; i < 1000; i++) {
//     let numeroRandom = parseInt(Math.random()*100)

//     if (numeroRandom == 0 || numeroRandom == 100){
//         numeroRandom = parseInt(Math.random()*100)

//         console.log(numeroRandom + ' Error')
//     }else{console.log(numeroRandom + '\n')}
// }

//                  ____Math____
console.clear();
// sqrt()
console.log(Math.sqrt(25)) // raiz cuadrada

// cbrt()
console.log(Math.cbrt(27)) // raiz cubica

// max()
console.log(Math.max(25,59,21,45,75,321,456,968,321,65465,3213,65461321)) // solo recibe numeros, nada de arrays
// devuelve el numero mas grande

// min()
console.log(Math.min(25,59,21,45,75,321,456,968,321,65465,3213,65461321))// solo recibe numeros, nada de arrays
// devuelve el numero mas pequeño

// random()
console.log(parseInt(Math.random()*100))

// round()
console.log(Math.round(9.451531)) // redondea al numero mas cercano, si es 9.4 retorna 9, si es 9.5 retorna 10

// floor()
console.log('\nfloor()') // siempre redondea para abajo
let arr = new Array;
for (let i = 0; i <100; i++) {
    let numeroAle = Math.random()*100;
    numeroAle = Math.floor(numeroAle + 1);

    arr.push(numeroAle)
}
console.log(arr)


//fround()
console.log('fround() ',Math.fround(9.755555555555555555555555555555555555321321354321))
// redondea a 15, 4 bytes

// trunc()
console.log('Math.trunc(9.9) = ',Math.trunc(9.9) ,' & Math.round(9.9) = ',Math.round(9.9))

// trunc no reondea, solo elimina los decimales

//                   ____PROPIEDADES_____

// PI
console.log('\nPI = ',Math.PI + '\nRadio de la circunferencia de un circlo respecto a su diâmetro, aproximadamente 3.')
// SQRT1_2
console.log('\nSQRT1_2 = ',Math.SQRT1_2 + '\nRaiz cuadrada de 1/2')
// SQRT2
console.log('\nSQRT2 = ',Math.SQRT2+ '\nRaíz cuadrada de 2, aproximadamente 1.414.')
// E
console.log('\nE = ',Math.E+ '\nConstante de Euler, la base de los logaritmos naturales, aproximad')
// LN2
console.log('\nLN2 = ',Math.LN2+ '\nLogaritno natural de 2, aproximadamente 0.693')
// LN10
console.log('\nLN10 = ',Math.LN10+ '\nLogaritmo natural de 10, aproximadamente 2.303')
// LOG2E
console.log('\nLOG2E = ',Math.LOG2E+ '\nLogaritmo de E con base 2, aproximadamente 1.443')
// LOG10E
console.log('\nLOG1OE = ',Math.LOG10E+ '\nLogaritmo de E con base 10, aproximadamente 0.434')