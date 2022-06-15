import React, { useState, useEffect } from 'react';

export default function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));

    const increase = () => {
        setCount (
            count<stock? count + 1 : alert("No hay stock")
            );
    }
    const decrease = () => {
        setCount (
            count>initial? count - 1 : alert(`Debes comprar al menos ${initial} unidad`)
            );
    }
    useEffect(() => {
        setCount(parseInt(initial));
      }, [initial]);


    return(
        <div className='counter'>
            <div>
                <button className='btnCount' onClick={decrease}>-</button>
                <span>{count}</span>
                <button className='btnCount' onClick={increase}>+</button>
            </div>
            <button className='btnCarrito' disabled={stock<=0} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}


//- disabled={count <= 1}
//+ disabled={count>= stock}
