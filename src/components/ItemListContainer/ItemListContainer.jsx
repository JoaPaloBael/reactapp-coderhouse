import React, {useState, useEffect} from 'react'
import productData from '../../data/products_data.json';
import ItemList from './ItemList/ItemList';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  // El useEffect se ejecuta luego del return
  useEffect(()=>{
      //Se ejecuta una sola vez. Es ideal para Apis o llamadas al backend.
      //Creo la promesa
      const traerProductos = new Promise((res, rej) => {
          setTimeout(() => {
              res(productData);
          }, 1500);
      })
      //Indico que hacer con la promesa que traigo
      traerProductos
      .then((data)=>{
          setProducts(data);

      })
  }, []);

  // console.log(products);

  return (
    <div className='ItemListContainer'>
      <ItemList articulos={products}/>
    </div>
  )
}
