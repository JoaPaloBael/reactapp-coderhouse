import React, { useState, createContext } from "react";
//1. Importamos e inicializamos nuestro CreateContext
const cartContext = createContext();

//2. Definimos nuestro provider y lo exportamos
export function CartContextProvider (props) {
    // Creamos un array vacío para sumar elementos al carrito
    const [cart, setCart] = useState([{item: "Item A", cant: 2}, {item: "Item B", cant: 4}]);

    // 3. Pasamos al provider el "value" para los componentes que consuman el context
    // 4. Retornamos el Context Provider con el value
    return <cartContext.Provider value={ {cart, otrovalor: "hola"} }>
        {props.children}
    </cartContext.Provider>
}


//Exportamos el Provider y el Context
export default cartContext;

//Context:
//Con todo esto me voy a App.jsx