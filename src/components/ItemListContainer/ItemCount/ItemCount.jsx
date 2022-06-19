import React, { useState, useEffect } from 'react';

export default function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));

    const increase = () => {
        if(count < stock) {
            setCount(count + 1);
        } else {
            alert ("Alcanzaste el máximo de unidades disponibles");
        }
    }
    const decrease = () => {
        if(count > initial) {
            setCount(count - 1);
        } else {
            alert ("Debes comprar al menos una unidad");
        }
    }
    useEffect(() => {
        setCount(parseInt(initial));
      }, [initial]);


    return(
        <div className='counter'>
            <div>
                <button className='btnCount' onClick={decrease} >-</button>
                <span>{count}</span>
                <button className='btnCount' onClick={increase}>+</button>
            </div>
            <button className='btnCarrito' disabled={stock<=0} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}


//- disabled={count <= 1}
//+ disabled={count>= stock}
