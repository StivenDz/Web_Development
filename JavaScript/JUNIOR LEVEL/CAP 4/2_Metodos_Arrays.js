console.log('\n\n\n\n\n\n\n\n\n\n')

//              ______Transformadores______

let nombres = ['Jesus', 'Brian', 'Daniel']

// pop()
console.log(nombres.pop()) // elimina y muestra el ultimo elemento del arary
console.log(nombres) // aqui se ve que solo quedan los des primeros

// shift()
console.log(nombres.shift()) // elimina y muestra el primer elemento del array
console.log(nombres) // solo quedaria Brian


// push()
console.log(nombres.push('Messi','Neymar')) // añade al final de la lista y muestra la longitud actualizada
console.log(nombres)


// reverse()
console.log(nombres.reverse()) // nos lo invierte y queda así
console.log(nombres)

// unshift()
console.log(nombres.unshift('StivenDz')) // agrega el valor que le enviemos y retorna la nueva longitud de esta misma
console.log(nombres)

// sort()
console.log(nombres.sort()) // lo ordena de forma alfabetica, dependiendo de la primer letra, si fueran numeros los ordena de menor a mayor
let numeroDes = [5,8,6,1,3,5,4,8,9,2]
console.log('Ordenando el arreglo ' +numeroDes.sort())

// splice() puede recibir 2 o 3 parametros
console.log(numeroDes.splice(2,4)) 
console.log(numeroDes)// se eliminan de la posicion 2 a la cuarta, se cuenta desde cero, y si colocamos el otro parametro, este seria el remplazo e iria en la posicion que eliminamos
// retorna los eliminados
// el primer parametro es desde donde va a borrar y el segundo es cuantos va a borrar desde la partida del primer parametro
// el tercero es lo que queremos reemplazar por esa eliminacion
console.log(numeroDes.splice(2,4,100,222,333,444,555,666))
console.log(numeroDes)



//              ______Accesores______

// join()

let result = nombres.join('\nNombre: ') // crea una cadena separada por lo que le coloquemos como argumento, sino le colocamos nada, lo separa todo por comas
console.log('\nNombre: '+result)
/*      output
Nombre: Brian
Nombre: Messi
Nombre: Neymar
Nombre: StivenDz
*/

// slice()

console.log([1,2,3,4,5,6].slice(0,3)) // slice es como partir una porcion de un array y string, en este caso lo partimos desde la posicion 0 hasta la 3 - 1, el ultimo valor no se toma, en pocas palabras es como si el segundo parametro fuera la cantidad de elementos que habrian es esa porcion,partiendo desde la posicion del primer parametro 

console.log(numeroDes.slice((numeroDes.length - 1),(numeroDes.length))) // este seleccionaria el ultimo
console.log(numeroDes.slice((0),(-1))) // este seleccionaria todos, menos el ultimo
console.log(numeroDes.slice((0),(-2))) // este seleccionaria todos, menos los 2 ultimos


//            _______De Repeticion_____

// filter() forEach()

let test = ['salud','energia','alimentacion','ejercicio','horas de sueño','productividad']

console.log('filter()')
test.filter(i => console.log(i+'\n'))

console.log('\n\nforEach()')
test.forEach(i => console.log(i+'\n'))