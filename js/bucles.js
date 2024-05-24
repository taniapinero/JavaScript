let pases = 0;
//Bucle while, evalúa la condición y si es true entra en el bucle, si no, finaliza y sigue a la siguiente línea
// while (pases < 10) { //Booleano (true o false)
//     console.log("Número de pase -> " + pases);
//     pases++;
// }

/*Mostrar la tabla de multiplicar */
// let x=1;
// let y=1;
// while (x<=10) {
//     while (y<=10) {
//         console.log(x+"x"+y+"="+(x*y));
//         y++;
//     }
//     x++; //Se incrementa x
//     y=1; //se inicializa y para que en la próxima vuelta comience en 1
// }

/**************************/

/*Actividad 2.10*/
// letra="";
// while (letra!="s") {
//     letra=prompt("Indica una letra. Intento -> " + pases).toLowerCase();
//     pases++;
// }
// console.log("¡Has acertado!");

//Random o aleatorio!
//Array o cadenas
// let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

// let numeroAleatorio=parseInt(Math.random()*26); //abecedario guarda todas las letras... que van con índice desde el 0=A hasta la 26=Z || parseInt convierte los números en enteros
// console.log(abecedario[numeroAleatorio]); //numero aleatorio

// let letra="";
// while (letra!=abecedario[numeroAleatorio]) {
//     letra=prompt("Indica una letra").toUpperCase();
// }
// alert("Adivinaste... es la letra " + abecedario[numeroAleatorio]);


/******* Do While *******/
// let contador=0;
// let numero=1;
// while (contador<10) {
//     if (numero%2==0) {
//         console.log("Es par");
//         console.log(contador);
//         contador++;
//     }
//     numero++;
// }



/*Actividad 2.11*/
// letra="";

// do {
//     letra=prompt("Indica una letra. Intento -> " + pases).toLowerCase();
//     pases++;
// } while (letra!="s");
// alert("Has acertado!");


/**FOR ******************** */
// for (let x = 1; x <= 10; x++) {
//     for (let y = 0; y <= 10; y++) {
//         console.log(x + "x" + y + "=" + (x * y));
//     }
// }

/*********************/
/* ACTIVIDAD 2.12 */
//Multiplos de 7 desde el 1 al 100

// for (let i = 0; i <=100; i+=7) {
//     console.log("Múltiplo de 7 -> " + i);
// }


/**Guardería */
// let dias=document.querySelector("#dias");
// let meses=document.querySelector("#meses");
// let anios=document.querySelector("#anios");

// for (let dia=1; dia <= 31; dia++) {
//     /* Crear un elemento en el html --DOM */
//     opcion=document.createElement("option"); //Diseñando el elemento
//     opcion.textContent=dia; // Lo que se muestra el valor en el documento
//     opcion.value=dia; // Value -> Valor como tal
//     dias.appendChild(opcion);
// }

// for (let mes = 1; mes <= 12; mes++) {
//     opcion=document.createElement("option"); //Diseñando el elemento
//     opcion.textContent=mes; // Lo que se muestra el valor en el documento
//     opcion.value=mes; // Value -> Valor como tal
//     opcion.classList.add("desplegable"); // Agregar clase css
//     //opcion.classList.remove <- Esto lo que hace es quitar una clase
//     opcion.setAttribute("id", mes); // Agregar atributos
//     meses.appendChild(opcion); // Crear el elemento hijo
// }

// for (let anio = 2024; anio >= 2014; anio--) {
//     opcion=document.createElement("option"); //Diseñando el elemento
//     opcion.textContent=anio; // Lo que se muestra el valor en el documento
//     opcion.value=anio; // Value -> Valor como tal
//     anios.appendChild(opcion);
// }


//Saltos e interrupción en bucles
//break
// Muestra la tabla de multiplicar del 9 hasta que llegue a 5

// const TABLA=9;

// for (let index = 0; index <=10; index++) {
//     console.log(`${TABLA} x ${index} = ${TABLA*index}`);
//     if (index==5) {
//         break; // Interrumpe o rompe el bucle
//     }
// }

//Salto
//Muestra los 10 primeros impares que no sean múltiplos de 3
let contadorS=0;
let numeroS=1;

while (contadorS<10) {
    if (numeroS%3==0) {
        numeroS++;
        continue; // Con esto lo que hace es que no ejecuta las siguientes límeas, sino que vuelve al while
        
    }
    if (numeroS%2!=0) {
        console.log("Es Impar" + numeroS);
        contadorS++;
    }
    numeroS++; // Se incrementa si no hace el salto (par o impar)
}





