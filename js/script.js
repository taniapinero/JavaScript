/**
 * Tipos de variables
 
 JavaScript no bliga a definir que tipo de variable está trabajando
 */

nombre = "María Rojas"; //Tipo de variable String, puedes usar comillas dobles ("") o simples ('')
edad = 25; //Tipo Number, no necesita comillas
espaniol = true; //Tipo Boolean, solo tiene 2 estados (true o false)
sexo = null;

//¿Cómo puede ver los valores sin mostrarlos en el html?
//Se utiliza para ver la ejecución o valores -> console.log(aquí lo que quieres mostrar)

//Quiero ver lo que tiene nombre:
console.log(nombre);
console.log(edad);
console.log(espaniol);
console.log(sexo);

//Operador de concatenación + une 2 o más expresiones de salida
//Typeof te dice que tipo de dato es
console.log("nombre -> " + typeof (nombre));
console.log("edad -> " + typeof (edad));
console.log("espaniol -> " + typeof (espaniol));
console.log("sexo -> " + typeof (sexo));

direccion = "Calle Campo 81";
//Simplificar las cadenas con Backticks
console.log(`Datos Personales -> ${nombre} Dirección -> ${direccion}`);
console.log("Datos personales -> Nombre: " + nombre + ", Dirección: " + direccion);

//Si la variable es numérica, podemos realizar operaciones matemáticas
console.log("El año que viene cumplirás " + (edad + 1) + " años");
console.log(`El año que viene cumplirás ${edad + 1} años`);

console.log('Esta es una frase de Cervantes \'En un lugar de la Mancha\'');
console.log("Esta es una frase de Cervantes \"En un lugar de la Mancha\"");
console.log("Esta es una frase de Cervantes 'En un lugar de la Mancha'");
console.log("Esta es una frase de Cervantes \n\t'En un lugar de la Mancha'");

console.log("El signo de la eternidad Armenia es \u{058D}"); //Sin las llaves también funciona
console.log("El código de Bitcoin es \u20BF");


//Actividad Propuesta 2.4
/**Crea un fichero JavaScript que incluya una sola instrucción que sea capaz de sacar por consola la siguiente cadena:
 * El acceso a la ruta C:\\usuario\tarda 1,23", algo considerado "lento" en la actualidad.
 */

console.log("El acceso a la ruta C:\\\\usuario\\\ tarda 1,23\"\, algo considerado \"lento\" en la actualidad.");


/**Tipos de datos Numéricos (number) */
altura = 1.80; //El tipo de dato numérico es decimal
diametro = 2e-9;
console.log(`Altura -> ${altura}`);
console.log(`Diámetro -> ${diametro}`);
resultado = altura / 0; //->Infinito
otroResultado = resultado + 10;
console.log(otroResultado);
//El lenguaje es capaz de entender y operar con el valor infinito

//Si tienes otro tipo de dato y quieres hacer una operación matemática -> NaN (Not a Number)
resultado = nombre * 25;
console.log(resultado); // * / % ** pero con el + siempre concatena
resultado = nombre + 25;
console.log(resultado);
resultado + " " + edad;
resultado = `${nombre} ${edad}`;
console.log(resultado);

//Tipo de datos booleanos (true o false)
valorVerdadero = true;
valorFalso = false;

console.log(`1-¿True?: ${Boolean(true)}`);
console.log(`2- ¿False?: ${Boolean(false)}`);
console.log(`3-1: ${Boolean(1)}`);

//Si existe datos... siempre va a ser true
texto = "Un texto ejemplo";
console.log(`5 - texto: ${Boolean(texto)}`);

textoVacio = "";
console.log(`5 - textoVacio: ${Boolean(textoVacio)}`);


//Conversión de tipos
masAnios = "10"; // Tipo de dato es string o cadena...
console.log(edad + masAnios); //La salida es 2510 porque son numérico y cadena
console.log(edad + Number(masAnios)); //La salida es 35
console.log(String(edad) + masAnios); //2510

console.log(true * 7); //Da 7 porque true es 1
console.log(9 - false); //Da 9 porque false es 0
console.log(edad * masAnios);
console.log(edad / masAnios);
console.log(edad - masAnios);
console.log(edad ** masAnios); //** <- Esto es esponencial
console.log(undefined / edad); // NaN
console.log(null * edad); //0


/****************/
parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "Es una prueba de JavaScript en el DOM";
//Esto coge lo que hay en el documento -> Toma el elemento por el ID párrafo. Ahora mismo está vacío. -> Y el inner muestra en el párrafo (que no hay nada) lo que hemos escrito aquí

parrafo.innerHTML = "";
//lectura del documento resultaría vacío

cuadrado = document.querySelector(".cuadrado");
cuadrado = document.querySelector("#cuadrado");
cuadrado = document.querySelector("p");
//QuerySelector solo coge el primero.
//En el caso de que existan varios:
cuadrado = document.querySelectorAll("p"); //Arrays


//Si quiero llamar al párrafo:
parrafo = document.querySelector("#parrafo");
titulo = document.querySelector("h1");

titulo.innerHTML = "Práctica de JavaScript";
cuadrado.innerHTML = "A";

document.write("Es una prueba de document.write");


//Variables -
var edad = 58; //Var se pueden declarar los que quieras con el mismo nombre. Cuidado con el
let email = "j@gmail.com"; //let no se puede repetir

document.write("<p>" + email + "</p>"); //Esto está mal hecho pero es para que haga el salto de línea

/* Ámbito de bloque */
var mensaje = "Mensaje 1" //Declaramos mensaje
function mostrarMensaje() { //Creamos una función -> actúa como un bloque
    mensaje = "<br> Mensaje dentro del Bloque"; //
    document.write(mensaje);
}
mostrarMensaje();
document.write("<br>mensaje fuera -> " + mensaje);

/*Let */
document.write("<br>***********************")
let mensaje1 = "Mensajes 1";
function mostrarMensaje2() {
    let mensaje1 = "<br>Mensaje dentro del Bloque";
    document.write(mensaje1);
}

mostrarMensaje2();
document.write("<br>Mensaje fuera -> " + mensaje1)



//******** Constantes ********/
const IVA = 21;
let precio = 50 * ((IVA / 100) + 1);
document.write("<br>El precio final es " + precio);

precio = 105 * ((IVA / 100) + 1);

//Salidas por consola
console.error("Aquí hay un error");
console.info("Es una información");
console.warn("Es una noticicación importante");
console.log('%c mensaje con estilo', 'font-size: 36px; font-weight:bold; color:blue');



//Salidas de mensajes
/*alert("Es una alerta") //Detiene la ejecución del programa hasta que no salga*/ //Lo he comentado para que no salga todo el rato
document.write("<br>prueba...prueba...prueba!!")

//Mensaje de confirmación (si/no... (true/false))
/*let confirmacion=confirm("¿Quieres salir del programa?");
document.write(`<br>El usuario quiere salir? -> ${confirmacion}`);*/

/*if(confirmacion){ // Instrucción de condición
    window.location.replace("https://google.es");
}else{
    alert("Te quedas aquí!");
}*/

//Mensaje de entrada de datos
/*nombre=prompt("Escribe tu nombre");
document.write(`<br>El nuevo nombre es -> ${nombre}`);*/


/*Actividad propuesta 2.5 pag 50*/
// nombre=prompt("Escribe tu nombre");
// document.write(`<br>El nuevo nombre es -> ${nombre}`);

// let confirmacion=confirm("¿Quieres abandonar el programa?");
// document.write(`<br>El usuario quiere abandonar el programa? -> ${confirmacion}`);

// console.log('%cFin del programa', 'font-weight:bold; color:blue; text-decoration:underline;');


let a = 5;
let b = a;
console.log("El valor de b es " + b);

//Forma simplificada:
// a+=c; // El valor de a se le suma otra vez su valor + el valor de b
//5+5+5
a = a + b;

a += b;
console.log("El  valor de a es " + a);

let c = a % b; // Modulo:0 a=25, b=5, resto 0
console.log("El valor de c es " + c);

//Exponentes
let d = b ** 4;
console.log("El valor de d es -> " + d);

//Operadores de comparación -> Sólo dan como resultado true o false
let respuesta = a == b;
console.log("A es igual a B? -> " + respuesta);

//Distinto
respuesta = a != b;
console.log(respuesta);

//Igualdad estricta
let e = "5"; //String
respuesta = b == e;
console.log(respuesta); //Da true. Es independiente que e sea String
/* En el caso de igualdad estricta restulta falso porque b es number y e es string*/
respuesta = b === e;
console.log(respuesta);
// === tiene que ser iguales y del mismo tipo

//Desigualdad estricta
respuesta = b !== e; // b no es igual que e en valor o en tipo
console.log(respuesta); //true

//Mayor | Menor | Mayor o igual | Menor o igual
respuesta = a > b;  //True
respuesta = c < b;//true
respuesta = b >= e;//true -> Compara sus valores, no el tipo

a++; //Ahora a vale 16
console.log("Ahora a vale " + a);
a--;
console.log("Ahora a vale " + a);
a -= 3;
console.log("Ahora a vale " + a);

console.log("Operaciones con AND");
console.log(`1. => ${true && true}`);
console.log(`2. => ${true && false}`);
console.log(`3. => ${false && true}`);
console.log(`4. => ${false && false}`);
//Evaluamos condiciones
console.log(`5. => ${4 > 5 && 3 > 5}`);
console.log(`5. => ${4 <= 5 && 3 <= 5}`);

console.log("Operaciones con OR");
console.log(`1. => ${true || true}`);
console.log(`2. => ${true || false}`);
console.log(`3. => ${false || true}`);
console.log(`4. => ${false || false}`);

console.log("Operaciones con NOT");
console.log(`1. -> ${!true}`); //false
console.log(`2. -> ${!false}`); //true

//Ejemplo práctico
let edadNueva = 18;
let matriculado = true;
resultado = edadNueva && matriculado;
console.log(resultado); // true porque edadNueva tiene contenido

//Operador ternario
resultado = a > b ? "A es mayor que B" : "B es mayor que A";
console.log(resultado);

//Ejercicio: solicita por promt la edad e indica por un alert si es mayor de edad o menor de edad
// eDad=prompt("Escribe tu edad");
// resultado=eDad>=18?"Eres mayor de edad":"No eres mayor de edad";
// alert(resultado);


//Estructura condicional if-else
console.log("**********************");
console.log("Inicio");
let local = 2;
let visitante = 1;

if (local === visitante) {
    console.log("Hay empate");
} else {
    console.log("No hay empate");
}
console.log("Fin");

//Estructuras condicionales con if else
if (local===visitante) {
    console.log("Hay empate");
}else if(local>visitante){
    console.log("Gana equipo local");
}else{
    console.log("Gana equipo visitante");
}


/**17 de mayo */
document.querySelector("#imagen");
imagen.src="../img/3.png"










