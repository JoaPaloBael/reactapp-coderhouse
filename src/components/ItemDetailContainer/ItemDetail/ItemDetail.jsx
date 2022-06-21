import React from 'react';
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';

export default function ItemDetail({item}) {
    const onAdd = (count) => {
        console.log(`compraste ${count} unidades`);
      }

  return (
    <div className='itemsDetail'>
        <img src={item.img} alt="texto" />
        <div className='itemDetail'>
            <h1>{item.brand}</h1>
            <h2>{item.name}</h2>
            <h3>${item.price} ARS</h3>
            <ItemCount onAdd={onAdd} initial={item.initial} stock={item.stock}/>
        </div>
    </div>
  )
}
