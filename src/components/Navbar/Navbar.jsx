import CartIcon from './CartIcon/CartIcon';
import NavLogo from './NavLogo/NavLogo';
import NavSearch from './NavSearch/NavSearch';
import { Link } from 'react-router-dom';
function Navbar (){
    return(
      <div>
        <nav className="nav nav-xxl">
          <NavLogo/>
          <NavSearch/>
          <CartIcon/>
        </nav>
        <nav className="nav nav-xs">
          <NavLogo/>
          <div className='nav-xs-search'>
            <NavSearch/>
            <CartIcon/>
          </div>
        </nav>
        <nav className='navCategories'>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/detalle">DETALLE</Link></li>
            <li><Link to="/">LINK</Link></li>
            <li><Link to="/">LINK</Link></li>
            <li><Link to="/">LINK</Link></li>
          </ul>
        </nav>
      </div>
    )
}

export default Navbar;
