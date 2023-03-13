import { API_URL } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
// import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
// import { showMessageWithTimeout } from "../appState/thunks";
import { loginSuccess, logOut, tokenStillValid } from "./slice";

export const signUp = (firstName, lastName, email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      // dispatch(showMessageWithTimeout("success", true, "account created"));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        // dispatch(
        //   setMessage({
        //     variant: "danger",
        //     dismissable: true,
        //     text: error.response.data.message,
        //   })
        // );
      } else {
        console.log(error.message);
        // dispatch(
        //   setMessage({
        //     variant: "danger",
        //     dismissable: true,
        //     text: error.message,
        //   })
        // );
      }
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      console.log("response", response);
      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      // dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        // dispatch(
        //   setMessage({
        //     variant: "danger",
        //     dismissable: true,
        //     text: error.response.data.message,
        //   })
        // );
      } else {
        console.log(error.message);
        // dispatch(
        //   setMessage({
        //     variant: "danger",
        //     dismissable: true,
        //     text: error.response.data.message,
        //   })
        // );
      }
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());

    if (token === null) return;

    try {
      const response = await axios.get(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid({ user: response.data }));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
    }
  };
};
