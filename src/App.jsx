import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import useCartStore from "./store/cartStore";
import CartDrawer from "./components/CartDrawer";
import { Toaster } from "react-hot-toast";

function App() {
  const cart = useCartStore((state) => state.cart);

  return (
    <Router>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Toaster position="top-right" />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
