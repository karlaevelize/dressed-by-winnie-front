import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation, InfoBar } from "./components";
import { Homepage, ShoppingCart, Login, SignUp } from "./pages";

const App = () => {
  return (
    // <div class="bg-gradient-to-r from-yellow-300 to-yellow-500">
    <div class="text-gray-600">
      <Navigation />
      {/* <InfoBar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
