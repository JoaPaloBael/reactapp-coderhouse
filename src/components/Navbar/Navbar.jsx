import logo from '../../resources/img/Recurso 2.svg'
import CartIcon from './CartIcon/CartIcon';
import NavLink from './NavLink/NavLink';
function Navbar (){
    return(
        <nav className="nav">
          <a href="index.html"><img src={logo} alt="Market"/></a>

          <ul>
            <NavLink title="Inicio"/>
            <NavLink title="Promociones"/>
            <NavLink title="Productos"/>
            <CartIcon color="#1c3144"/>
          </ul>
        </nav>
    )
}

export default Navbar;
