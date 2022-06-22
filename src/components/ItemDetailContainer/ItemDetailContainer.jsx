import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import productData from '../../data/products_data.json';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    //Voy a llamar a un unico producto
    // Genero el estado para luego guardar ahí los detalles
    const [product, setProduct] = useState({});

    //Routing - Params
    const { id } = useParams();
    console.log("parametros: ", id);


    // Genero un efecto para crear una "falsa promesa"
    useEffect(() =>{
        const traerProducto = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Como validar los ID
                const itemNumId = parseInt(id)
                const itemFound = productData.find(item => {
                    return item.id === itemNumId;
                })
                resolve(itemFound);
            }, 2000);
        })
    //Indico que hacer con la promesa que traigo
    traerProducto
    .then((data)=>{
        setProduct(data);
    })
}, [id]);


  return (
    <div className='itemDetailContainer'>
        <ItemDetail item={product}/>
    </div>
  )
}
