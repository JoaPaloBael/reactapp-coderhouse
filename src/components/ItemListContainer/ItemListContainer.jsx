import React, {useState, useEffect} from 'react'
import productData from '../../data/products_data.json';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  // El useEffect se ejecuta luego del return
  useEffect(()=>{
      //Se ejecuta una sola vez. Es ideal para Apis o llamadas al backend.
      //Creo la promesa
      const traerProductos = new Promise((res, rej) => {
          setTimeout(() => {
              if(categoryId === undefined){
                res(productData);
              } else {
                const itemsFound = productData.filter(item => {
                    return item.category === categoryId;
                })
                res(itemsFound);
              }
          }, 2000);
      })
      //Indico que hacer con la promesa que traigo
      traerProductos
      .then((data)=>{
          setProducts(data);
      })
  }, [categoryId]);

  // console.log(products);

  return (
    <div className='ItemListContainer'>
      <ItemList articulos={products}/>
    </div>
  )
}
