import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import shoppingCartReducer from "./shoppingCart/slice";
import userReducer from "./user/slice";
import orderReducer from "./order/slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: shoppingCartReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
