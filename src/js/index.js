//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Secondcounter from "./component/counter.jsx";
// Funcion SetInterval para asignar cada cuantos milisegundos se ejecuta una función
setInterval(conteo, 1000);
let digit = 0;
function conteo() {
    digit = digit + 1;
    //render your react application
    ReactDOM.render(<Secondcounter seconds={digit} />, document.querySelector("#app"));
}
// Si quisiera incluir otro componente en el render como podría hacerlo o solo se puede uno¿?

// Consultar la función extraida de fuentes externas para entender su funcionamiento.
// function counterSettingZero(digit) {
//     const counterString = digit.toString().padStart(6, "0"); // Convierte el número a una cadena de longitud 6 con ceros a la izquierda
//     return counterString  
// } 

// Si el numero vale 1234, se puede separar en 1,2,3,4...¿?
// Si el número pasado a string vale "1234", yo podría mostrar el primer caracter del string haciendo digit[0] devolvería 1