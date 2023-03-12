import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("action", action);
      state.shoppingCart.push(action.payload);
    },
    remove: (state, action) => {},
    increase: (state, action) => {
      console.log("action");
    },
    decrease: (state, action) => {},
    reset: (state) => {},
  },
});

export const { add, increase } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
