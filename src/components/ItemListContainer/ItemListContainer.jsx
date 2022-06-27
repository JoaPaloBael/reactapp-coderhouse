import React, {useState, useEffect} from 'react'
import productData from '../../data/products_data.json';
import ItemList from '../itemList/ItemList';
import Spinner from '../spinner/Spinner';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  // State productos
  const [products, setProducts] = useState([]);
  //Renderizado condicional
  const [isLoading, setIsLoading] = useState(true);
  // Params de busqueda
  const {categoryId} = useParams();
  // useEffect productos
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
          setIsLoading(false);
      })
  }, [categoryId]);



  return (
    <div className='ItemListContainer'>
      {isLoading ? <Spinner/> : <ItemList articulos={products}/>}
    </div>
  )
}
