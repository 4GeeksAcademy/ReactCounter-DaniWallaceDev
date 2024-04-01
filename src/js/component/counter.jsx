import React from "react";
import Digitcard from "./Digitcard";

// 1. Crear componente que incluya en props los segundos y muestre en primera instancia un h1
const Secondcounter = (props) => {
    const numero = props.seconds;
    
    const unidades = numero % 10;
    const decenas = Math.floor(numero / 10) % 10;
    const centenas = Math.floor(numero / 100) % 10;
    const miles = Math.floor(numero / 1000) % 10;
    const decenasmil = Math.floor(numero / 10000) % 10;
    const centenasmil = Math.floor(numero / 100000) %10;
    
    return (
      <div>
        <Digitcard>
        <i class="fa-solid fa-stopwatch"></i>
        </Digitcard>
        <Digitcard>
        {centenasmil}
        </Digitcard>
        <Digitcard>
        {decenasmil}
        </Digitcard>
        <Digitcard>
        {miles}
        </Digitcard>
        <Digitcard>
        {centenas}
        </Digitcard>
        <Digitcard>
        {decenas}
        </Digitcard>
        <Digitcard>
        {unidades}
        </Digitcard>
      </div>
    );
  }  

// 2. Exportar el componente a mi index.js
export default Secondcounter;