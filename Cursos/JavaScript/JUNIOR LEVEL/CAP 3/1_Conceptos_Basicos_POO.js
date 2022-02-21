/*
    - Clase
    - Objeto
    - Atributo
    - Metodo
    - Metodo Constructor/Constructor
*/

class Animal{ // Clase
    constructor(especie, edad,color){ // Metodo Contructor/Constructor
        this.especie = especie; // Atributo
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie} , tengo ${this.edad} y soy de color ${this.color}`;
    }

    verInfo(){ // Metodo
        console.log(this.info)
    }
    // el this solo se usa en el motodo constuctor
    // las funciones flechas no se pueden usar como metodos, ni el function
    // solo asi como aparece
}

const perro = new Animal('Perro', 5 , 'Marron'); // Instanciacion
// Perro objeto

const gato = new Animal('Gato', 2 , 'blanco');
const pajaro = new Animal('Pajaro', 7 , 'azul');

// console.log(perro);
// console.log(perro.info)

// console.log(gato)
// console.log(gato.info)

// console.log(pajaro)
// console.log(pajaro.info)

perro.verInfo();
gato.verInfo();
pajaro.verInfo();


