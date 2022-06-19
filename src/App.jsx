import "./style.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div className="body">
    <Navbar />
    <ItemListContainer/>
    </div>
  );
}

export default App;
