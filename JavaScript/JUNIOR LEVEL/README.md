0) Introduccion - ¿Qué es JavaScript?

    - Lenguaje de programacion

    - Interpretado (todo el codigo que escribimos no tiene que ser pasado por un compilador, sino que va directamente a   ajecutarse en el navegador, tiene una herramienta que se llama interpreter ,que interpreta el codigo en tiempo real, que se va ejecutando linea por linea, algoritmicamente)

    - Orientado a Objetos (Es un lenguaje en donde su estructura abarca todas las carateristicas de programacion orientada a objetos, abarca: <class> <herencia> <polimorfismo>)

    - Imperativo (Todas las instrucciones van en linea en linea, el codigo se ejecuta linea por linea, paso por paso)

    - Case sensitive (Upper and Lower Case) (Es sensible a mayusculas y minusculas)

    - Basado en prototipos / instancias / classless

    - Tipado debil (El valor de las variables puede cambiar con el tiempo ,el tipo de dato)

    - Lenguaje dinamico (La variable no se ajusta al dato, el dato se ajusta a la variable)

    - ECMASCRIPT (5.1 y 6,7,8, NEXT)

1) Editor de codigo (VSC)

2) ¿Para que se usa?

    - Dinamismo en elos sitios web (del lado del cliente)
    - Servidor Nodejs
    - Tecnologias Frontend como Angular, React, Vue.JavaScript

    Otros usos no tan comunes:

    - Inteligencia Artificial
    - Placas ealectronicas (Jhonny five)
    - Mobile Apps
    - Desktop Apps
    - Etc...

3) Formas de enlazar JavaScript

    - En linea
    - Como contenido en la etiqueta <Script>
    - Como contenido en un archivo de formato .js 
    - Con un require(), esto sería del lado del servidor, con Nodejs

4) variables

    - Concepto (es una caja que contiene algo, un dato, cuya caja le podemos poner el nombre que querramos)
        &&     (es un espacio que guardamos,reservamos en la memoria de nuestro programa, para usarlo de vuelta)
    - Ejemplo
    - Tipos de Datos: String (cadena de texto) = 'cadena de texto' || "cadena de texto",
                      Number = 19, 
                      Boolean = true || false, 
                      Symbol=> no es un dato primitivo)

    - Casos especiales de datos: Undefined => la declaramos, pero no le hemos dado valor,
                                 Null => significa vacio, pero nosotros le hemos dado ese valor,
                                 Nan => not a number;
    - Scope
    - Hoisting
    - Tipos de Variables (let, var y const)
    - Crear multiples variables (separandolas con coma) => let nombre1 =  'jorge', nombre2 = 'pedrita';

    - pruebas con prompt:
        let nombre = prompt('Dime tu nombre');
        alert('Hola ' + nombre);

5) Operadores en JavaScript

    - Operadores de Asignacion => {

        un operador se Asignacion asigna un valor al operando de la izquierda basado en el valor del 
        operando de la derecha

        
        Operadores de asignación compuestos
        Nombre	                                        Operador abreviado	                 Significado
        Asignación	                                            x = y	                        x = y
        Asignación de adición	                                x += y	                        x = x + y
        Asignación de resta	                                    x -= y	                        x = x - y
        Asignación de multiplicación	                        x *= y	                        x = x * y
        Asignación de división	                                x /= y	                        x = x / y
        Asignación de residuo	                                x %= y	                        x = x % y
        Asignación de exponenciación	                        x **= y	                        x = x ** y
        Asignación de desplazamiento a la izquierda	            x <<= y	                        x = x << y
        Asignación de desplazamiento a la derecha	            x >>= y	                        x = x >> y
        Asignación de desplazamiento a la derecha sin signo	    x >>>= y	                    x = x >>> y
        Asignación AND bit a bit	                            x &= y	                        x = x & y
        Asignación XOR bit a bit	                            x ^= y	                        x = x ^ y
        Asignación OR bit a bit	                                x |= y	                        x = x | y
        Asignación AND lógico	                                x &&= y	                        x && (x = y)
        Asignación OR lógico	                                x ||= y	                        x || (x = y)
        Asignación de anulación lógica	                        x ??= y	                        x ?? (x = y)
}
    - Operadores Aritmeticos => {
        los operadores aritemeticos toman valores numericos (ya sean literales o variables) como sus
        operandos y retornan un valor numerico unico

        Operador	                    Descripción	Ejemplo
        Residuo (%)	        Operador binario. Devuelve el resto entero de dividir los dos operandos.	
                            12 % 5 devuelve 2.

        Incremento (++)	    Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), 
                            devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++),
                            devuelve el valor de su operando antes de agregar uno.
                            Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y ,
                            solo entonces, establece x en 4.

        Decremento (--) 	Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.
                        	Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y,
                            solo entonces, establece x en 2.

        Negación unaria (-)	Operador unario. Devuelve la negación de su operando.
                        	Si x es 3, entonces -x devuelve -3.

        Positivo unario (+)	Operador unario. Intenta convertir el operando en un número, si aún no lo es.	
                            +"3" devuelve 3.
                            +true devuelve 1.

        Operador de exponenciación (**)	Calcula la base a la potencia de exponente, es decir, baseexponente	2 ** 3 returns 8.
                                         10 ** -1 returns 0.1.
    }

---------------------------------------------------------------------------------------------------------------------------------------------------
                                                     Empieza Lo Chido    


6) Concatenacion

    - Definicion y Ejemplo
    - Con el signo +
    - para numeros forzamos string ("" + 9 + 4)
    - Con Concat
    - Con backtiks y la variable entre ${}

    -con el signo{
        saludo = "Hola Pedro\n";
        pregunta = "¿Como Estás?";

        frase = saludo + pregunta;
        
        document.write(frase);
    }
    -forzarmos String{
        numero1 = 5;
        numero2 = 8;

        numeros = "" + numero1 + numero2 => se crea un string => output => 58
    }
    -Contact{ es solo para los Strings
        numero1 = '53';
        numero2 = 8;

        numeros = numero1.contact(numero2) => es un metodo de cadena
    }
    -backtiks{
        name = "Stiven Diaz";
        frase = `soy ${name} y estoy estudiando js`; => se debe encerar entre backtiks ` ${} `
    }

7) Backtiks (bloquote o acento grave) y escape

    - Sin backticks: "Linea 1\
                            Linea 2"
    - Con backtiks: `````linea 1
                            linea 2`
    
    - Escape de comillas simples ' "" ' ✔  '  ''  ' ❌ unas commilas simples no pueden contener comillas simples
    - escape de comillas dobles  " '' " ✔  "  ""  " ❌ unas commilas dobles no pueden contener comillas dobles

---------------------------------------------------------------------------------------------------------------------
                                Pasamos Al Editor de Codigo, Operadores.js

8) Operadores (Intermedio)

    - Operadores de comparacion
    - Operadores Logicos

9) Camel Case

10) Condicionales

    - if
    - else if
    - else

11) Arrays

    - Definicion y usos
    - Formas de crear un Arrays

12) Arrays Asociiativos

    - Definicion
    - Sintaxis y usos

13) Bucles e Iteraciones

    - Definicion y usos

    - Sentencia While
    - Sentencia do While
    - Sentencia for
    - Sentencia for in
    - Sentencia for of

    ---------------------

    - Sentencia break
    - Sentencia label
    - Sentencia continue
    
14) Funciones

    - Definicion y usos
    - Formas de crear funciones (y llamarlas)
    - Return
    - Parametros
    - Scope

15) ForEach

    - Sintaxis y usos
    - Ventajas respecto a for
    - Desventajas (Break, Continue)

15) POO

    - Definicion y Usos
    - Ejemplos


16) Conceptos Basicos de POO
    - Clase
    - Objeto
    - Atributo
    - Metodo
    - Constructor
    - Instanciacion

17) Caracteristicas de la POO

    - Abstraccion
    - Modularidad
    - Jerarquia
    - Encapsulamiento
    - Polimorfismo

18) Otros Conceptos de POO

    - Metodos Estaticos
    - Encapsulamiento
    - Metodos Accesores (Getters, Setters)

20) Metodos de Cadenas

    - contact() - Junta dos o mas cadenas y retorna una nueva
------------------------------------------------------------------
    - startsWith() - Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false

    - endsWith() - Si una cadena termina con los caracteres de otra cadena, devuelve true, sino

    - includes() - Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false

    - indexOf() - Devuelve el indice del primer caractere de la cadena, sino existe, devuelve -1

    - lastIndexOf() - Devuelve el ultimo indice del primer caraceter de la cadena, sino existe, devuelve -1
------------------------------------------------------------------
    - padStart() - [Propuesta Estandar] - Rellenaar cadena al principio con los caracteres deaseados

    - padEnd() - [Propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados

    - repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos
------------------------------------------------------------------
    - split() - Divide la cadena como le pidamos

    - substring() - Nos retorna un pedazo de la cena que seleccionamos

    - toLoweCase() - Convierte una cadena a minuscula

    - toUpperCase() - Convierte una cadena a mayuscula
    
    - toString() - metodo devuelve una cadena que representa al objeto especificado

    - trim() - elimina los espacios en blanco al principio y al final de una cadena

    - trimStart() elimina los espacios del principio

    - trimEnd() elimina los espacios del final

    - valueOf() Retorna el valor primitivo de un objeto string

21) Metodos de Arrays

    ______Transformadores______
    - pop() - Elimina el ultimo elemento de un array y lo odevuelve
    - shift() - Elimina el primer elemento de un array y lo odevuelve
    - push() - Agrega un elemento al array al final de la lista
    - reverse() - invierte el orden de los elementos de un array
    - unshift() - agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del mismo
    - sort() - ordena los elementos de un array lcoalmente y devuelve el arreglo oradenando
    - splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

    ______Accesores______
    - join() - une todos los elementos de una matriz enuna cadena y la devuelve
    - slice() - devuelve una parte de el array dentro de un nuevo array, empezando por inicio hasta fin(fin no incliudo) 
    - Metods ya vistos en cadenas: toString, indexOf, lastIndexOf, incluides

    _______De Repeticion_____
    - filter() 
    - forEach() 
    - map()

22) Objeto Math - Basico

    ____METODOS____

    - sqrt() - Devuelve la raiz cuadrada positiva de un número.
    - cbrt() - Devuelve la raiz cúbica de un número.
    - max() - De vuelve el mayor de cero o más números.
    - min() - De vuelve el más pequeño de cero o más números.
    - random() - Devuelve un número pseudo-aleatorio entre o y 1.
    - round() - Devuelve el valor de un nůmero redondeado al - - número entero más cercano.
    - fround() - Devuelve la representación flotante de precisión simple más cercana de un número.
    - floor() - Devuelve el mayor entero menor que o igual a un número.
    - trunc () - Devuelve la parte entera del número x, la eliminación de los digitos fraccionarios.
        
        
    ____PROPIEDADES_____

    - PI - Radio de la circunferencia de un circlo respecto a su diâmetro, aproximadamente 3. 14159.
    - SQRT1_2 - Raiz cuadrada de 1/2; Equivalentemente, 1 sobre la raiz cuadrada de 2, aproximadamente 0.707.
    - SQRT2 - Raíz cuadrada de 2, aproximadamente 1.414.

    - E - Constante de Euler, la base de los logaritmos naturales, aproximad
    - LN2 - Logaritno natural de 2, aproximadamente 0.693
    - LN10 - Logaritmo natural de 10, aproximadamente 2.303
    - LOG2E - Logaritmo de E con base 2, aproximadamente 1.443
    - LOG10E - Logaritmo de E con base 10, aproximadamente 0.434

26) Console
_________funciones de registro_____________

    - assert() - Aparece un mensaje de error en la consola si la afirmación es falsa. si la afirmación es verdadera, no aparecerá nada. (NO ESTANDAR)

    - clear() - limpia la consola
    - error() - Muestra un mensaje de error en la Consola web.
    - info() - Emite un mensaje informativo a la consola Web. En Firefox y Chrome, se muestra un pequeño ícono "i" junto a estos elementos en el registro de la consola Web.

    - log() - Muestra un mensaje en la consola neb (o del intérprete Javascript).

    - table() - Esta función toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: columns y nos muestra una tabla en consola

    - warn() Imprime un mensaje de advertencia en la consola Web.

    - dir() - Despliega una lista interactiva de las propiedades del objeto Javascript especificado. [NO ESTANDAR]


________funciones de conteo_______

    - count() - Registra el número de veces que se 1lama a count(). Esta función toma como argumento opcional una etiqueta.
    - countReset() - Resetea el contador console.count()
            I
    _____funciones de agrupación.______
    - group() - Crea un nuevo grupo en línea en el registro de la consola web.
    - grupEnd() - Remueve un grupo en linea en el regisitro de la consola web.
    - groupcollapsed() - Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.

    _____funciones de temporización______
    time() - inicia un temporizador.
    timeEnd() - Registra el valor ac tual de un temporizado.
    timelog() - Detiene un temporizador.

27) DOM (Document Object Model)
    - Definición.
    - Concepto Extendido.
    - Nodo - Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo
    body o incluso las etiquetas de una lista.

        *Document: el nodo document es el nodo raiz, a partir del cual derivan el resto
        de nodos.
        *Element: nodos definidos por etiquetas html.

        *Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de
        tipo text (texto).

        *Attribute: los atributos de las etiquetas definen nodos, (en Javascript no los
        veremos como nodos, sino como información asociada al nodo de tipo element)
        
        *Comentarios y otros: los comentarios y otros elementos como las declaraciones
        doctype en cabecera de los documentos HTML generan nodos.

28) Document - Metodos de Selección de elenentos

    - getElementById() - Selecciona un elemento por ID

    - getElementsByTagNane() - Selecciona todos los elementos que coincidan con el noubre de la etiqueta especificada.

    - queryselector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.

    - queryselectorAl1() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

29) Metodos para Definir, obtener y Eliminar atributos.
    -  setattribute() - Modifica el valor de un atributo
    -  getattribute() - obtiene el valor de un atributo
    -  removeattribute() Remueve el valor de un atributo

30) Atributos globales
    - class - lista de clases del elemento separadas por espacios

    - contenteditable - indica si el elemento puede ser nodificable por el usuario (bool)

    - dir - indica la direccionalidad del texto

    - hidden - indica si el elenento aún no es, o ya no es, relevante.

    - id - define un identificador único.

    - style - Contiene declaraciones de estilo css para ser aplicadas al elenento.

    - tabindex - indica si el elemento puede obtener un focus de input

    - title - Contiene un texto con información relacionada al elemento al que pertenece.

31) Atributos de Inputs
    - classNane
    - value
    - type
    - ассеpt
    - form
    - ninlength
    - placeholder
    - required

32) Atributo style
    - usos y ejenplos
    - propiedades Camel Case

34) Clases, classList y Metodos de classList

    - Definición y usos
    - add() - añade una clase
    - remove() - remueve una clase
    - item() - devuelve la clase del indice especificado
    - contains() - verifica si ese elemento posee o no, la clase especificada.
    - replace() -  reemplaza una clase por otra
    - toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

36) Obtención y Modificación de Elementos
    - textcontent - devuelve el texto de cualquier nodo.
    - innerText - devuelve el texto visible de un node element.
    - outerTekt - devuelve el texto que de las etiquetas html incluidas las etiquetas.
    - innerHTML devuelve el contenido html de un elemento
    - outerHTML - devuelve el codigo HTML completo del elemento

37) Creación de Elementos
    - createElements()
    - createDocumentFragment()
    - createTextNode()
    - appendchild()

38) obtención y modificación de childs (Hijos)
    - firstchild
    - lastchild
    - firstelementchild
    - lastelementchild
    - childNodes
    - children
    
39) Metodos de Childs (Hijos)
    - replacechild()
    - removechild( )
    - haschildNodes()

41) Propiedades de parents (Padres)
    - parentelement
    - parentNlode

42) Propiedades de Siblings (Hermanos)
    - nextsibling
    - previoussibling
    - nextElementsibling
    - previousElementsibling

43) Nodos - Extras
    - closet()