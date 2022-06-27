import React from 'react'
import Item from '../item/Item'

export default function ItemList({articulos}) {
  return (
    <div className='itemList'>
        {
          // Mapeo los articulos
            articulos.map((item)=>{
                return (
                    <Item item={item} key={item.id}/>
                )
            })
        }
    </div>
  )
}
