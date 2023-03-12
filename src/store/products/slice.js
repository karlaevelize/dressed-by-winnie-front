import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetched: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { productsFetched } = productsSlice.actions;

export default productsSlice.reducer;
