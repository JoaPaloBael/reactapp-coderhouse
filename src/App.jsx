import "./style.scss";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Promociones from './pages/Promociones';
import Cart from './components/cart/Cart';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//Vengo de cartContext
//5. Importamos y renderizamos el Provider
import {CartContextProvider} from './context/CartContext';
function App() {

  return (
    <div className="body">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/promociones" element={<Promociones/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
