import BoxProductos from "./BoxProductos/BoxProductos";
import ItemCount from "./BoxProductos/ItemCount/ItemCount";

export default function CarouselProductos() {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }
  return (
    <section className="CarouselProductos">
        <BoxProductos>
          <ItemCount initial={1} stock={9} onAdd={onAdd}/>
          <ItemCount initial={1} stock={7} onAdd={onAdd}/>
          <ItemCount initial={1} stock={3} onAdd={onAdd}/>
        </BoxProductos>

    </section>
  )
}
