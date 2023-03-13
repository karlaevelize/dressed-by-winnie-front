import axios from "axios";
import { productsFetched } from "./slice";
import { API_URL } from "../../config/constants";

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    dispatch(productsFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};
