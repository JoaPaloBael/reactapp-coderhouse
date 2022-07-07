//6. Importamos el Hook useContext y el userContext
import React, { useState, useContext } from 'react';
import cartContext from '../../context/CartContext';

import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';

export default function ItemDetail({item}) {
  const [cant, setCant] = useState(0);
  //7. Importamos el VALUE del context
  const { cart } = useContext(cartContext);
  console.log(cart);

    const onAdd = (count) => {
      setCant (count);
      console.log(count >= 2 ? (`compraste ${count} unidades `): (`compraste ${count} unidad`) );
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
