import React, {useState}from 'react'
import ItemCount from '../ItemCount/ItemCount';

export default function Item({item}) {
    // console.log(item);
    const onAdd = (count) => {
        console.log(`compraste ${count} unidades`);
      }
      const [products, setProducts] = useState([]);

    return (
      <div className='item'>
        <img src={item.img} alt={item.name} />
        <h2>{item.name}</h2>
        <h3>$ {item.price} kg</h3>
        <ItemCount onAdd={onAdd} initial={item.initial} stock={item.stock}/>
      </div>
  )
}
