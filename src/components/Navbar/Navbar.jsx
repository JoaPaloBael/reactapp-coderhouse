import CartIcon from './CartIcon/CartIcon';
import NavLogo from './NavLogo/NavLogo';
import NavSearch from './NavSearch/NavSearch';
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
      </div>
    )
}

export default Navbar;
