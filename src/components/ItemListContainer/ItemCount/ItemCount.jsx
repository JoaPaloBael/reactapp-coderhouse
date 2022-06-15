import React, { useState, useEffect } from 'react';

export default function ItemCount ({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));

    const increase = () => {
        setCount (count + 1);
    }
    const decrease = () => {
        setCount (count - 1);
    }
    useEffect(() => {
      setCount(parseInt(initial));
    }, [initial]);

    return(
        <div className='counter'>
            <div>
                <button className='btnCount' onClick={decrease} disabled={count <= 1}>-</button>
                <span>{count}</span>
                <button className='btnCount' onClick={increase} disabled={count>= stock}>+</button>
            </div>
            <button className='btnCarrito' disabled={stock<=0} onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

