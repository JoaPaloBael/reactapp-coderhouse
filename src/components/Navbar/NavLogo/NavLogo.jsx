import logo from '../../../resources/img/logo/Recurso 2.svg';
import { Link } from 'react-router-dom';
export default function NavLogo() {
  return (
    <Link to="/" className='NavLogo'>
      <img src={logo} alt="Market"/>
    </Link>
  )
}
