/*
    - Sentencia While
    - Sentencia do While
    - Sentencia for
    - Sentencia for in
    - Sentencia for of

    ---------------------

    - Sentencia break
    - Sentencia label
    - Sentencia continue

*/

let numero = 0;
let numero2 = 0;
let numero3 = 0;

// Primero verifica que sea verdader la comprobacion y despues se ejecuta el bloque de codigo
while(numero < 10){  
    numero++;

    document.write(numero + '<br/>')
};
document.write('<br/>')

// Primero ejecuta el codigo y despues pregunta, y si es falsa, no se ejecuta mas
do{
    numero2++;

    document.write(numero2 + '<br/>')

}while(numero2 < 10);
document.write('<br/>')


// Sentencia Break
while(numero3 < 1000){
    numero3++
    document.write(numero3 + ' ');
    if(numero3 == 10){
        break
    }
}document.write('<br/>')

// (for), (continue), (for in), (for of)
//- declaramos, inicializamos e iteramos

for (let i = 1; i < 20; i++) { // for
    document.write('<br/>')
    document.write(i + ' ')
    for (let j = i-1; j >= 0; j--) {
        if (j === 0){
            document.write(j + '<br/>')
        }else{
            document.write(j + ' ')
        }
    }
}

for (let i = 1; i < 20; i++){ // continue
    if(i == 12){
        continue;
    };console.log(i + '');

}

let animales = ['gato','perro','tiranosaurio rex']

for (let animal in animales) { // for in devuelve la posicion
    //para poder imprimirlos, sería asi:
    //document.write('<br/>' + animales[animal])
    document.write('<br/>' + animal)
}

for (let animal of animales) { // for of
    document.write('<br/>' + animal)
}

// Label
forMil:
for (let i = 0; i < 1000; i++) {
    if(i == 200){
        break forMil
    }
}


