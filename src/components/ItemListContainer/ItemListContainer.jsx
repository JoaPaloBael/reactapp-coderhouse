import React from 'react';
import ItemCount from './ItemCount/ItemCount';

export default function ItemListContainer() {
  const onAdd = (count) => {
    console.log(`compraste ${count} unidades`);
  }
  return (
    <div className='ItemListContainer'>
      <ItemCount onAdd={onAdd} initial={1} stock={10}/>
      <ItemCount onAdd={onAdd} initial={1} stock={8}/>
      <ItemCount onAdd={onAdd} initial={1} stock={25}/>
      <ItemCount onAdd={onAdd} initial={1} stock={13}/>
    </div>
  )
}
