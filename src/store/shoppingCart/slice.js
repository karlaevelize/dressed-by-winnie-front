import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const item = action.payload;
      state.shoppingCart.push(item);
    },
    remove: (state, action) => {},
    increase: (state, action) => {
      console.log("action");
      const { id, size } = action.payload;
    },
    decrease: (state, action) => {},
    reset: (state) => {
      state.shoppingCart = [];
    },
  },
});

export const { add, increase } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
