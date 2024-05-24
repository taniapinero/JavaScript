let numeroUser; // Guardar el número que escriba el usuario
let numSecreto = parseInt(Math.random() * 100 + 1); //Será el número secreto que genere la máquina
let acertado = false; //Cambiará a true cuando el usuario acierte

while (!acertado) {
    numeroUser = Number(prompt("Indica el número"))
    if (numSecreto < numeroUser) {
        alert("El número debe ser menor")
    } else if (numSecreto > numeroUser) {
        alert("El número debe ser mayor")
    } else if (numSecreto == numeroUser) {
        alert("¡Has acertado");
        acertado = true;
    }
    else {
        alert("No has escrito un número... Inténtalo de nuevo")
    }
}
