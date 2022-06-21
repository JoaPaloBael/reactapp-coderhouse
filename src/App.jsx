import "./style.scss";
import Navbar from "./components/Navbar/Navbar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div className="body">
    <Navbar />
    {/* <ItemListContainer/> */}
    <ItemDetailContainer greeting={"Hola Products Detail!"}/>
    </div>
  );
}

export default App;
