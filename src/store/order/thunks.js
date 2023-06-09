import axios from "axios";
import { API_URL } from "../../config/constants";
import { orderSuccess } from "./slice";

export const createOrder = (cart, userInfo) => async (dispatch, getState) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, { cart, userInfo });
    dispatch(orderSuccess(response.data.order));
  } catch (e) {
    console.log(e.message);
  }
};
