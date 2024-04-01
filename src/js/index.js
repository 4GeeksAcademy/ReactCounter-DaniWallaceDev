//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Secondcounter from "./component/counter.jsx";
// Funcion SetInterval para asignar cada cuantos milisegundos se ejecuta una función
setInterval(conteo, 1000);
let digit = 0;
function conteo() {
    if (digit < 100000) {
        digit = digit + 1;
        ReactDOM.render(<Secondcounter seconds={digit} />, document.querySelector("#app"));
        console.log(digit);
    }
}