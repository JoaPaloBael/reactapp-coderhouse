import CardProducto from "./CardProducto/CardProducto";

export default function BoxProductos() {
  return (
    <div className="BoxProductos">
        <CardProducto prodName="Tomate"/>
        <CardProducto prodName="Lechuga"/>
        <CardProducto prodName="Cebolla"/>
    </div>
  )
}
