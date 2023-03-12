import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import shoppingCartReducer from "./shoppingCart/slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: shoppingCartReducer,
  },
});

export default store;
