//Tengo que importar el método userState
import React, { useState } from "react";
import ItemCount from './ItemCount/ItemCount';

export default function CardProduct(props) {


  return (
    <div className="CardProducto">
      <img src={props.prodImg} alt={props.prodName}/>
      {/* usando props */}
      <div className="prodName">{props.prodName}</div>
      <ItemCount inicial={1} stock={5}/>
    </div>
  )

}
