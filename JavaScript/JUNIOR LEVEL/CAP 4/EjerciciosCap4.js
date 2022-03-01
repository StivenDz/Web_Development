class Calculadora{
    sumar (num1,num2){
        return parseInt(num1) + parseInt(num2);
    };
    restar (num1,num2){
        return parseInt(num1) - parseInt(num2);
    };
    dividir (num1,num2){
        return parseInt(num1) / parseInt(num2);
    };
    multiplicar (num1,num2){
        return parseInt(num1) * parseInt(num2);
    };
    raizCuadrada (num1){
        return (Math.sqrt(num1));
    };
    raizCubica (num1){
        return (Math.cbrt(num1));
    };
    potencia (num1, exponente){
        return num1 ** exponente;
    };

};

const calc = new Calculadora();
const operaciones = () =>{
    document.write("¿Que operación deseas realizar?");
    let operacion = prompt("1: suma\n2: resta\n3: división\n4: multiplicación\n5: Potenciacion\n6: Raiz Cuadrada\n7: Raiz Cubica");

    if (operacion == 1) {
        let numero1 = prompt("primer número para sumar");
        let numero2 = prompt("segundo número para sumar");
        resultado = calc.sumar(numero1,numero2);
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 2) {
        let numero1 = prompt("primer número para restar");
        let numero2 = prompt("segundo número para restar");
        resultado = calc.restar(numero1,numero2)
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 3) {
        let numero1 = prompt("primer número para dividir");
        let numero2 = prompt("segundo número para dividir");
        resultado = calc.dividir(numero1,numero2)
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 4) {
        let numero1 = prompt("primer número para multiplicar");
        let numero2 = prompt("segundo número para multiplicar");
        resultado = calc.multiplicar(numero1,numero2)
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 5) {
        let numero1 = prompt("número para potenciar");
        let numero2 = prompt("exponente");
        resultado = calc.potencia(numero1,numero2)
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 6) {
        let numero1 = prompt("Numero para sacar raiz cuadrada");
        resultado = calc.raizCuadrada(numero1)
        alert(`El resultado es ${resultado}`);
    }
    else if (operacion == 7) {
        let numero1 = prompt("Numero para sacar raiz Cubica");
        resultado = calc.raizCubica(numero1)
        alert(`El resultado es ${resultado}`);
    }

    else {
        alert("no se ha encontrado la operación")
    }
}

//operaciones();

//                  Ejercicio 2

const obtenerInfo = (materia) =>{
    let materias = {
        fisica: ['Perez','Pedro','Juan','Cofla','Hernan','Maria','Martha'],
        programacion: ['Diaz','Pedro','Juan','Pepo','Joe','Martha'],
        logica: ['Hernandez','Pedro','Joe','Cofla','Hernan','Maria'],
        quimica: ['Bolt','Pepo','Juan','Cofla','Hernan','Maria'],
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia]
    }else{
        return materias
    }
}



const showInfo = (materia) =>{
    materia = materia.toLowerCase();

    let informacion = obtenerInfo(materia)
    if (informacion){
        /*
            Solucion de Dalto

            let profesor = obtenerInfo('fisica')[0][0];
            let personas = obtenerInfo('fisica')[0];
            personas.shift();

            console.log(`El profesor asignado para la materia de ${informacion[1]} es: ${profesor}\nLos personas son: ${personas}`)
        */

        let profesor = informacion[0].slice(0,1)
        console.log(`El profesor asignado para la materia de ${informacion[1]} es: ${profesor}\n\nLos personas son: ${'\n- '+(informacion[0].slice(1,informacion[0].length).join('\n- '))}`)
    }else{
        
        console.log(`${(materia[0].toUpperCase()).concat(materia.slice(1,materia.length))} no se encuentra`)
    }
}
// showInfo('Fisica')
// showInfo('naturales')
// showInfo('pRograMacion')
// showInfo('quimica')

const cantidadDeMaterias = (alumno) =>{
    let informacion = obtenerInfo();
    let cantidadTotal = 0;
    let profe = new Array;
    let clases = new Array;
    for(info in informacion){ // info es igual a fisica,programacion  es igual a el identificador de los arrays
        if(informacion[info].includes(alumno)){
            profe.push(informacion[info].slice(0,1))
            cantidadTotal++;
            clases.push(info);
        }
    }
    console.log( `Alumn@ ${alumno} está en ${cantidadTotal} clases\nCon los profesores:`)
    for(let i = 0; i < clases.length;i++){
        if(i == clases.length - 1){
            console.log(`- (${clases[i]}) ${profe[i]}\n\n`)
        }else{
            console.log(`- (${clases[i]}) ${profe[i]}`)
        }
    }
}

// cantidadDeMaterias('Cofla');
// cantidadDeMaterias('Maria');
// cantidadDeMaterias('Pepo');

//                    Ejercicio 3


let materias = {
    fisica: ['Perez','Pedro','Juan','Cofla','Hernan','Maria','Martha'],
    programacion: ['Diaz','Pedro','Juan','Pepo','Joe','Martha'],
    logica: ['Hernandez','Pedro','Joe','Cofla','Hernan','Maria'],
    quimica: ['Bolt','Pepo','Juan','Cofla','Hernan','Maria'],
}

const inscribir= (alumno,materia) =>{
    let personas = materias[materia];
    if (personas.length >= 21){
        console.log(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas`)
    }else {
		personas.push(alumno);
		if (materia == "fisica") {
			materias = {
		        fisica: personas,
		        programacion: materias['programacion'],
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}
		else if (materia == "programacion") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: personas,
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}else if (materia == "logica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: personas,
		        quimica:materias['quimica']
	        }
		}else if (materia == "quimica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: materias['logica'],
		        quimica: personas
	        }
		}
        console.log(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente`)
    }
}

inscribir('juan','fisica')
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");

console.log(materias)