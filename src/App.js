import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import {
  Homepage,
  ShoppingCart,
  Login,
  SignUp,
  Checkout,
  OrderConfirmation,
  CompleteProfile,
} from "./pages";
import { selectUser } from "./store/user/selectors";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const user = useSelector(selectUser);

  return (
    <div class="text-gray-600">
      <Navigation />
      {user && !user.country && <MessageBox />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </div>
  );
};

export default App;
