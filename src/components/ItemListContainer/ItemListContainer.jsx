import React from 'react';
import ItemCount from './ItemCount/ItemCount';

export default function ItemListContainer() {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }

  return (
    <div className='ItemListContainer'>
      <ItemCount onClick={onAdd} initial={1} stock={10}/>
    </div>
  )
}
