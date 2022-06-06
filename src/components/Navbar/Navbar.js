import logo from '../../resources/img/logo-blanco.png'
import NavLink from './NavLink/NavLink';
function Navbar (){
  function handleClick(){
    console.log ("click")
  }
    return(
        <nav className="nav">
          <a href="index.html" onClick={handleClick}><img src={logo} alt="Market"/></a>

          <ul>
            <NavLink title="Inicio"/>
            <NavLink title="Promociones"/>
            <NavLink title="Productos"/>
          </ul>
        </nav>
    )
}

export default Navbar;
