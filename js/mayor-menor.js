let boton = document.querySelector(".boton");
boton.addEventListener("click", function () {

    let nombre1 = document.querySelector("#nombre1");
    let edad1 = document.querySelector("#edad1");

    let nombre2 = document.querySelector("#nombre2");
    let edad2 = document.querySelector("#edad2");

    let nombre3 = document.querySelector("#nombre3");
    let edad3 = document.querySelector("#edad3");

    let mnsError = "";
    let error=false;
    let mE = document.querySelector(".mensajeError") //Mensaje error
    let mC = document.querySelector(".mensaje"); //Mensaje correcto


    //Comprobaciones de campos vacíos etc

    if (nombre1.value == "" || nombre2.value == "" || nombre3.value == "") {
        mnsError = "El campo nombre es obligatorio"
        error = true;
    }

    if (edad1.value < 0 || edad1.value == "" || edad2.value < 0 || edad2.value == "" || edad3.value < 0 || edad3.value == "") {
        mnsError += "<br> El campo edad es obligatorio"
        error = true;
    }

    if (error) { //Si la variable error = true
        mC.innerHTML = "";
        mE.innerHTML = mnsError;

    } else {
        mE.innerHTML = "";

        /*********************** Comprobación de todos los números */
        if (+edad1.value > +edad2.value && +edad2.value > +edad3.value) {
            mC.innerHTML = `${nombre1.value}>${nombre2.value}>${nombre3.value} `;
        }

        else if (+edad1.value > +edad3.value && +edad3.value > +edad2.value) {
            mC.innerHTML = `${nombre1.value}>${nombre3.value}>${nombre2.value} `;
        }

        else if (+edad2.value > +edad1.value && +edad1.value > +edad3.value) {
            mC.innerHTML = `${nombre2.value}>${nombre1.value}>${nombre3.value} `;
        }

        else if (+edad2.value > +edad3.value && +edad3.value > +edad1.value) {
            mC.innerHTML = `${nombre2.value}>${nombre3.value}>${nombre1.value} `;
        }

        else if (+edad3.value > +edad1.value && +edad1.value >+edad2.value) {
            mC.innerHTML = `${nombre3.value}>${nombre1.value}>${nombre2.value} `;
        }

        else if (+edad3.value > +edad2.value && +edad2.value > +edad1.value) {
            mC.innerHTML = `${nombre3.value}>${nombre2.value}>${nombre1.value} `;
        }
        /******************* Comprobaciones de que no sean iguales ****/
        else if (+edad1.value==+edad2.value && +edad1.value>+edad3.value){
            mC.innerHTML=`${nombre1.value} tiene la misma edad que ${nombre2.value} y ${nombre3.value} es el menor`
        }
        else if (+edad1.value==+edad2.value && +edad1.value<+edad3.value){
            mC.innerHTML=`${nombre1.value} tiene la misma edad que ${nombre2.value} y ${nombre3.value} es el mayor`
        }
        else if (+edad2.value==+edad3.value && +edad3.value>+edad1.value){
            mC.innerHTML=`${nombre2.value} tiene la misma edad que ${nombre3.value} y ${nombre1.value} es el menor`
        }
        else if (+edad2.value==+edad3.value && +edad3.value<+edad1.value){
            mC.innerHTML=`${nombre2.value} tiene la misma edad que ${nombre3.value} y ${nombre1.value} es el mayor`
        }
        else if (+edad1.value==+edad3.value && +edad3.value>+edad2.value){
            mC.innerHTML=`${nombre1.value} tiene la misma edad que ${nombre3.value} y ${nombre2.value} es el menor`
        }
        else if (+edad1.value==+edad3.value && +edad3.value<+edad2.value){
            mC.innerHTML=`${nombre1.value} tiene la misma edad que ${nombre3.value} y ${nombre2.value} es el mayor`
        }
        else if(+edad1.value==+edad3.value && +edad3.value==+edad2.value){
            mC.innerHTML="Todas las edades son iguales"
        }
    }





})