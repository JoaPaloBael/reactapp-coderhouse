import CardProduct from "./CardProduct/CardProduct";
import tomate from '../../../resources/img/three-tomatoes.jpg';
import lechuga from '../../../resources/img/lechuga-romana.jpg';
import cebolla from '../../../resources/img/cebolla.jpg';

export default function BoxProductos() {
  return (
    <div className="BoxProductos">
        <CardProduct prodName="Tomate de huerta" prodImg={tomate}/>
        <CardProduct prodName="Lechuga" prodImg={lechuga}/>
        <CardProduct prodName="Cebolla" prodImg={cebolla}/>
    </div>
  )
}
