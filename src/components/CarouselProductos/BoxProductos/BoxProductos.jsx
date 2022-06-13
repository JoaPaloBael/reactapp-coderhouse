import CardProducto from "./CardProduct/CardProduct";
import tomate from '../../../resources/img/three-tomatoes.jpg';
import lechuga from '../../../resources/img/lechuga-romana.jpg';
import cebolla from '../../../resources/img/cebolla.jpg';

export default function BoxProductos() {
  return (
    <div className="BoxProductos">
        <CardProducto prodName="Tomate de huerta" stock={5} prodImg={tomate}/>
        <CardProducto prodName="Lechuga" stock={7} prodImg={lechuga}/>
        <CardProducto prodName="Cebolla" stock={1} prodImg={cebolla}/>
    </div>
  )
}
