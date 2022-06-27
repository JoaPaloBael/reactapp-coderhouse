import "./style.scss";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Promociones from './pages/Promociones';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="body">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/promociones" element={<Promociones/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
