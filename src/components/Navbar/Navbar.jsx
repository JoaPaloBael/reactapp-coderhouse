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
            <li><Link to="/promociones">PROMOCIONES</Link></li>
            <li><Link to="/category/hojas">Hojas verdes</Link></li>
            <li><Link to="/category/hortalizas">Hortalizas</Link></li>
            <li><Link to="/category/tuberculos">Tuberculos</Link></li>
            <li><Link to="/category/frutas">Frutas</Link></li>
          </ul>
        </nav>
      </div>
    )
}

export default Navbar;
