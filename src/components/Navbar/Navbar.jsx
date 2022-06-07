import CartIcon from './CartIcon/CartIcon';
import NavLink from './NavLink/NavLink';
import NavLogo from './NavLogo/NavLogo';
import NavSearch from './NavSearch/NavSearch';
function Navbar (){
    return(
        <nav className="nav">
          <NavLogo/>
          <NavSearch/>
          <CartIcon/>
        </nav>
    )
}

export default Navbar;
