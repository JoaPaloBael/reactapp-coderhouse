import "./style.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemListContainer/ItemCount/ItemCount";

function App() {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
  }
  return (
    <div className="body">
    <Navbar />
    <ItemListContainer>
        <ItemCount initial={1} stock={9} onAdd={onAdd}/>
        <ItemCount initial={1} stock={7} onAdd={onAdd}/>
        <ItemCount initial={1} stock={3} onAdd={onAdd}/>
      </ItemListContainer>
    </div>
  );
}

export default App;
