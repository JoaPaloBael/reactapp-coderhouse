import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';

export default function ItemDetail({item}) {
  const [cant, setCant] = useState(0);

    const onAdd = (count) => {
      setCant (count);
      console.log(`compraste ${count} unidades`);
      }

  return (
    <div className='itemsDetail'>
        <img src={item.img} alt="texto" />
        <div className='itemDetail'>
            <h1>{item.brand}</h1>
            <h2>{item.name}</h2>
            <h3>${item.price} ARS</h3>
            {
              cant === 0 ?(
                <ItemCount onAdd={onAdd} initial={item.initial} stock={item.stock}/>
              ) : (
                <Link to="/cart"><button className='btnCarrito'>Ir al carrito</button> </Link>
              )
            }
        </div>
    </div>
  )
}
