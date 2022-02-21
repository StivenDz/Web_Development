function saludar(){
    respuesta = prompt('Hola Como te fue?')
    if(respuesta == 'bien'){
        alert('Me alegro')
        return 'La funcion se ejecuto correctamente'

    }else{
        alert('Una pena')
        return 'La funcion se ejecuto correctamente y entro en el else'
    }
}

let saludo = saludar();
document.write(saludo)

// Parametros

function suma(num1,num2){
    return num1 + num2
}

resultado = suma(5,25)
document.write(resultado)

// formas de crear una funcion

const saludos = function(nombre){
    alert(`Hola ${nombre}`)
}

// funcion flecha

const saludo =()=>{
    alert(`Hola ${nombre}`)
}

// si tiene un solo parametro, se puede dejar asi:

const saludox = nombre =>{
    alert(`Hola ${nombre}`)
}
// si vas a ejecutar una sola cosa, se peude dejar asi:

const saludoz = nombre => alert(`Hola ${nombre}`); // se retorna automaticamente
