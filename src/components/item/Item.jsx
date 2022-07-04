import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


export default function Item({item}) {
  const [cant, setCant] = useState(0);
    //Formar la url
    const urlDetalle = `/item/${item.id}`
    // console.log(item);
    const onAdd = (count) => {
      setCant (count);
        console.log(`compraste ${count} unidades de ${item.name}`);
      }

    return (
      <div className='item'>
        <Link to={urlDetalle}><img src={item.img} alt={item.name} /></Link>
        <h2>{item.name}</h2>
        <h3>$ {item.price} kg</h3>
        {cant === 0 ?(
          <ItemCount onAdd={onAdd} initial={item.initial} stock={item.stock}/>
        ) : (
          <Link to="/cart"><button className='btnCarrito'>Ir al carrito</button> </Link>
        )}

      </div>
  )
}
