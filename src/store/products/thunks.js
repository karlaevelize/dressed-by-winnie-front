import axios from "axios";
import { productsFetched } from "./slice";

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/products");
    // console.log("response")
    dispatch(productsFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};
