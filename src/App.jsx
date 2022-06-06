import "./style.scss";
import Navbar from "./components/Navbar/Navbar";
import CarouselProductos from "./components/CarouselProductos/CarouselProductos";

function App() {
  return (
    <div className="body">
    <Navbar />
    <CarouselProductos/>
    </div>
  );
}

export default App;
