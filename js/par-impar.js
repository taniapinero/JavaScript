let boton=document.querySelector(".boton");
boton.addEventListener("click", function(){

    let num=document.querySelector("#numero").value;
    let msj="";

    if (num=="") {
        document.querySelector(".mensaje").innerHTML="";
        document.querySelector(".mensajeError").innerHTML="Debe ingresar un número para poder indicar si es par o impar"
    }else{
        if (num%2==0) {
            document.querySelector(".mensajeError").innerHTML="";
            document.querySelector(".mensaje").innerHTML=`El número ${num} es PAR`
        }else{
            document.querySelector(".mensajeError").innerHTML="";
            document.querySelector(".mensaje").innerHTML=`El número ${num} es IMPAR`
        }
    }
})