
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';

export default function CartIcon(props) {

    function MouseOver(e) {
        e.target.style.color= '#a2aebb';
    }
    function MouseOut(e){
        e.target.style.color="#FFFC99";
      }
  return (
        <li className='cartIcon' onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <a href="index.html"><ShoppingBagTwoToneIcon/></a>
        </li>

  )
}

