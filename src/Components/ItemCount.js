 import React from "react";
 import {useState} from "react";

 export const ItemCount = ({product}) => {
    const [counter, setCounter] = useState(0);
    const stock = 20;

    const restarClic = () => {
        if (counter === 0) return;
        setCounter(counter - 1);
        };

    const sumarClic = () => {
        if (counter === stock) {
            alert("Sin Stock");
            return;
          }
          setCounter(counter + 1);
    };

     return (
         <div className="Counter">
             <h3>{product}</h3>
             <span onClick={restarClic}>-</span>
             <span>{counter}</span>
             <span onClick={sumarClic}>+</span>
            <button>Agregar a Carrito</button>
         </div>
     );
 }