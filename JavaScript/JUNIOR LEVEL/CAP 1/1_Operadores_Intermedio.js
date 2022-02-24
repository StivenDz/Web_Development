//                                          Operadores (Intermedio)
// Operadores de Comparacion

function operadoresAritmeticos( numero , numero2){
    var dec = new Array;
    
    dec[0] = `${numero} != ${numero2} `+ (numero != numero2)
    dec[1] = `${numero} !== ${numero2} `+ (numero !== numero2)
    dec[2] = `${numero} == ${numero2} `+ (numero == numero2)
    dec[3] = `${numero} === ${numero2} `+ (numero === numero2)
    dec[4] = `${numero} < ${numero2} `+ (numero < numero2)
    dec[5] = `${numero} > ${numero2} `+ (numero > numero2)
    dec[6] = `${numero} <= ${numero2} `+ (numero <= numero2)
    dec[7] = `${numero} >= ${numero2} `+ (numero >= numero2)
  
    // return dec;
    for (let i = 0; i < dec.length ; i++) {
        console.log(dec[i])
    }
  }


function operadoresLogicos(num1 , num2){
    afirmacion = num1 > num2;
    afirmacion2 = num1 == num2;

    console.log(afirmacion && afirmacion2); // si ambos son true, devuelve true, de lo contrario devuelve false
    console.log(afirmacion || afirmacion2); // si uno es true, devuelve true, solo devuelve false cuando hay 2 false
    console.log(!afirmacion); // lo contrario a afirmacion, solo funciona con valores logicos, booleanos
}