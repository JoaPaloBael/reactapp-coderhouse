import React from 'react';
import ItemCount from './ItemCount/ItemCount';

export default function BoxProductos() {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }
  return (
    <div className='BoxProductos'>
      <ItemCount initial={1} stock={9} onAdd={onAdd}/>
      <ItemCount initial={1} stock={7} onAdd={onAdd}/>
      <ItemCount initial={1} stock={3} onAdd={onAdd}/>
    </div>
  )
}
