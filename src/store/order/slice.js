import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderSuccess: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { orderSuccess } = orderSlice.actions;

export default orderSlice.reducer;
