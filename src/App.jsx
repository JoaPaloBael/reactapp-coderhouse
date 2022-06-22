import "./style.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Promociones from './Pages/Promociones';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <div className="body">
      <BrowserRouter>
        <Navbar />
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
