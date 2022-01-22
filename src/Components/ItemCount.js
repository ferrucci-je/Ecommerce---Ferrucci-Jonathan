 import React from "react";
 import {useState} from "react";

 export const ItemCount = ({product}) => {
    const [counter, setCounter] = useState(0);
    const stock = 20;

    const restarClic = () => {
        if (counter > 0) {
            setCounter(counter -1)
        } else {
            setCounter(counter === 0)
        }
    };

    const sumarClic = () => {
        if (counter <= 0 || counter < stock) {
            setCounter(counter + 1)
        } else {
            setCounter('Sin Stock')
        }
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