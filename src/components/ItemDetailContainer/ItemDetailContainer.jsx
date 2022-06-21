import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail/ItemDetail';
import productData from '../../data/products_data.json';

export default function ItemDetailContainer({greeting}) {
    //Voy a llamar a un unico producto
    // Genero el estado para luego guardar ahí los detalles
    const [product, setProduct] = useState({});

    // Genero un efecto para crear una "falsa promesa"
    useEffect(() =>{
        const traerProducto = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productData[1])
            }, 2000);
        })
    //Indico que hacer con la promesa que traigo
    traerProducto
    .then((data)=>{
        setProduct(data);
    })
}, []);


  return (
    <div className='itemDetailContainer'>
        <ItemDetail/>
    </div>
  )
}
