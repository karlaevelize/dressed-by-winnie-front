import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation, InfoBar } from "./components";
import { Homepage, ShoppingCart, Login, SignUp, Checkout } from "./pages";

const App = () => {
  return (
    <div class="text-gray-600">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
