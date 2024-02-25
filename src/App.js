import About from "./About";
import Gallery from "./Gallery";
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import InstantOrders from "./InstantOrders";
import Cart from "./Cart";
import ReachUs from "./ReachUs";

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/reachus" element={<ReachUs />}/>
      <Route path="/instantorders" element={<InstantOrders />}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  );
}

export default App;
