import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export default function Item({item}) {
    //Formar la url
    const urlDetalle = `/detalle/${item.id}`
    // console.log(item);
    const onAdd = (count) => {
        console.log(`compraste ${count} unidades`);
      }

    return (
      <div className='item'>
        <Link to={urlDetalle}><img src={item.img} alt={item.name} /></Link>
        <h2>{item.name}</h2>
        <h3>$ {item.price} kg</h3>
        <ItemCount onAdd={onAdd} initial={item.initial} stock={item.stock}/>
      </div>
  )
}
