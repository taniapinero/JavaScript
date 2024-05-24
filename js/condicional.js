// /*Entrada a un pub -> Mayor de 18 años */
// // let edad=Number(prompt("Edad")); //conversión manual de tipo de dato, porque en principio es string

// //Verificar que edad sea un dato numérico
// // console.log(typeof(edad)); // Si es string tengo que pasarlo a numérico

// //Si tiene más de 18 años, entonces entrar =true
// let entrada=false; //Se inicializa a falso para que nadie entre si no cumple la condición de ser mayor de 18 años

// if(edad>=18){
//     entrada=true;
// }

// console.log("¿Puede entrar al Pub? -> " +entrada);

// /*********************/

// /*Ejemplo de if anidado, donde se declara un animal y luego se va entrando en diferentes if, hasta llegar al último else */
// let mascota="gato";
// if (mascota=="perro") {
//     console.log("La mascota es perro");
// }else if(mascota=="tortuga"){
//     console.log("La mascota es una tortuga");
// }else if (mascota=="canario") {
//     console.log("La mascota es un canario");
// }else{
//     console.log(mascota);
// }

/*Nota: en el ejemplo anterior no se cumple ninguna de las condiciones, y va directo al else final */

/*Si Ana tiene dienro y el artículo está en venta, podrá irse de compras. Si no, se queda en casa */
// let dinero=prompt("¿Tienes dinero?"); // Todo lo que escribas lo pase a mayúsculas -> string.toUpperCase()
// let enVenta=prompt("¿Está en venta?")

// if (dinero.toUpperCase()=="SI" && enVenta.toUpperCase()=="SI") { 
//     console.log("Ana se puede ir de compras");
// }else{
//     console.log("Ana se queda en casa");
// }



/*Estructura Switch Case*/
// console.log("Menú Iniciado");
// letra=prompt("Indica tu opción: [c]copiar [a]abrir [p]pegar")

// switch (letra) {
//     case "a": case"A": console.log("Se abre archivo");
//         break;

//     case "c": case"C": console.log("Se copia el archivo");
//         break;

//     case "p": case"P": console.log("Se pega el archivo");
//         break;

//       default: console.error("Opción no válida");
// }

/*Actividad propuesta 2.9 Página 63 */
let horario = ""; //La salida en html. Lo pongo vacío para limpiarlo cada vez que cargue la página
let botones = document.querySelectorAll(".boton"); //Toma todos los elementos que tienen la clase botón y crea un Array
//array.forEach(arrayItem=>{............................}) 

botones.forEach(elemento => { //En JS forEach es una función que se le aplica a un array para recorrerlo
    elemento.addEventListener("click", function () { //Escucha si hacen click en un botón y lee su valor
        switch (elemento.value) {
            case "l": case "L": horario = "Horario Lunes: 9:00 - 20:00";
                break;

            case "m": case "M": horario = "Horario Martes: 9:00 - 20:00";
                break;

            case "x": case "M": horario = "Horario Miércoles: 9:00 - 20:00";
                break;

            case "j": case "J": horario = "Horario Jueves: 9:00 - 20:00";
                break;

            case "v": case "V": horario = "Horario Viernes: 9:00 - 14:00";
                break;

            case "s": case "S": horario = "Horario Sábado: 9:00 - 12:00";
                break;

            case "d": case "D": horario = "Horario Domingo: Cerrado";
                break;
        }
        document.querySelector(".horario").innerHTML = "<h2>Horario</h2>" + horario;
    })
})




// console.log("Días de la semana");
// // dia=prompt("Indica la inicial del día de la semana (L,M,X,J,V")

// switch (dia) {
//     case "l": case"L":console.log("Horario Lunes: 9:00 - 20:00"); 
//         break;

//         case "m": case"M":console.log("Horario Martes: 9:00 - 20:00"); 
//         break;

//         case "x": case"M":console.log("Horario Miércoles: 9:00 - 20:00"); 
//         break;

//         case "j": case"J":console.log("Horario Jueves: 9:00 - 20:00"); 
//         break;

//         case "v": case"V":console.log("Horario Viernes: 9:00 - 14:00"); 
//         break;

//         case "s": case"S":console.log("Horario Sábado: 9:00 - 12:00"); 
//         break;

//         case "d": case"D":console.log("Horario Domingo: Cerrado"); 
//         break;

//     default: console.log("Introduce una letra válida");
//         break;
// }