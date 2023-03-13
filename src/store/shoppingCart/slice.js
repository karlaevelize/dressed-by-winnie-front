import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const item = action.payload;
      state.shoppingCart.push({
        cartId: Math.random().toString(36).substring(2, 10),
        ...item,
      });
      localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
    },
    remove: (state, action) => {
      const { cartId } = action.payload;

      const updatedCart = state.shoppingCart.filter(
        (item) => item.cartId !== cartId
      );

      state.shoppingCart = updatedCart;
    },
    increase: (state, action) => {
      const { id, size, quantity } = action.payload;

      const updatedCart = state.shoppingCart.map((item) => {
        return item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });

      state.shoppingCart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
    },
    decrease: (state, action) => {
      const { id, size } = action.payload;

      const updatedCart = state.shoppingCart.map((item) => {
        return item.id === id && item.size === size
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });

      state.shoppingCart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(state.shoppingCart));
    },
    reset: (state) => {
      state.shoppingCart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { add, remove, increase, decrease, reset } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
