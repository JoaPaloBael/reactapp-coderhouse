import React from "react";
import logo from '../../resources/img/logo-blanco.png'
function Navbar (){
    return(
        <nav className="nav">
          <a href="index.html"><img src={logo} alt="Market"/></a>

          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Carrito</a></li>
          </ul>
        </nav>
    )
}

export default Navbar;