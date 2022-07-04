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
        //Sugar sintax
        count > initial ? setCount(count - 1) : alert (`Debes comprar al menos ${initial} unidades`);
    }

    useEffect(() => {
        setCount(parseInt(initial));
      }, [initial]);


    return(
        <div className='counter'>
            <div>
                <button className='btnCount decrease' onClick={decrease} >-</button>
                <span>{count}</span>
                <button className='btnCount increase' onClick={increase}>+</button>
            </div>
            <button className='btnCarrito' onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

