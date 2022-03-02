//      _________funciones de registro____________

console.clear();

console.assert(5 < 4);

console.error('Que hiciste?');

console.warn('Che capo, venis bien, pero cuidado porque...'); // mensaje de adveretenciaa

console.info('che muy bien tu trabajo, pero eso no se usa mas');

let materias = {
    fisica: ['Perez','Pedro','Juan','Cofla','Hernan','Maria','Martha'],
    programacion: ['Diaz','Pedro','Juan','Pepo','Joe','Martha'],
    logica: ['Hernandez','Pedro','Joe','Cofla','Hernan','Maria'],
    quimica: ['Bolt','Pepo','Juan','Cofla','Hernan','Maria'],
};

console.table(materias); // solo recibe arrays u objetos

console.dir(materias['fisica']);
console.info(materias['fisica']);
console.log(materias['fisica']);


//           ________funciones de conteo_______

console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
console.countReset();
console.count();

console.clear()
//           _____funciones de agrupación______

console.group('frutas'); // este muestra el grupo abierto
console.groupEnd(); // devolvernos
console.groupCollapsed('Frutas'); // este lo muestra cerrado
console.groupEnd(); // devolvernos

//           _____funciones de temporización______

console.time(); // crea un temporizador
console.timeLog(); // muestra cuanto timepo ha pasado
console.timeEnd(); // cierra el temporizador y muestra cuanto tardo


// adicional

console.log("%cCrack","color:white;background:black;padding:20px 100px;border-radius:5px;border:3px solid blue");