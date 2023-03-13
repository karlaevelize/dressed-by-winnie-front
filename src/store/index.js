import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import shoppingCartReducer from "./shoppingCart/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: shoppingCartReducer,
    user: userReducer,
  },
});

export default store;
