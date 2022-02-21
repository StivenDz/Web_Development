
/*
    - Herencia
    - Abstraccion
    - Modularidad
    - Jerarquia

*/
class Perro extends Animal{ // Herencia
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = null
    }
    static Ladrar(){ // Metodo estatico
        console.log('Wow')
    }
    /**
     * @param {string} newName
     */
    set setRaza(newName){ // set es para modificarlo/cambiar algo
        this.raza = newName
    }
    get getRaza(){
        return this.raza
    }

}

const dog = new Perro('perro','5','negro','doberman')
dog.verInfo()
Perro.Ladrar(); // Como es un metodo estatico que no usa atributos puede ser accedido por la propia clase

dog.setRaza = 'San Bernardo'
console.log(dog.getRaza)
console.log(dog)