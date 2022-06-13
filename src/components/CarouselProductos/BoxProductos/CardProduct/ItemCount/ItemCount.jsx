import { useState } from "react";

export default function ItemCount({stock, inicial}) {

    const [count, setCount] = useState(inicial);

    function suma (){
      //Hace que 0 sea la cantidad máxima
      // setCount (Math.min(count + 1, stock));
      setCount (count + 1);
          console.log(count);
      }

    function resta (){
      //Hace que 0 sea la cantidad mínima
      // setCount (Math.max(count - 1, 1));
      setCount (count - 1);
        console.log(count);
    }

    const [texto, setTexto] = useState("Agregar al carrito");

    function cambiarTexto(){
      setTexto("Quitar del carrito");
    }
    return (
      <div className="ItemCount">
        <div>
          <button disabled={count <= inicial} onClick={resta} className="btnCount">-</button>
          <span>{count}</span>
          <button disabled={count>= stock} onClick={suma} className="btnCount">+</button>
        </div>
          {/* sin usar props */}
        <button onClick={cambiarTexto} className="btnCarrito">{texto}</button>
      </div>
    )
}
