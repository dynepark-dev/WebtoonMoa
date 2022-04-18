import * as api from "../API/index";
import { LOGIN, LOGOUT } from "./constants";

export const login = (input) => async (dispatch) => {
  try {
    const { data } = await api.api_login(input);
    dispatch({ type: LOGIN, payload: data });
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await api.api_logout();
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.log(err.message);
  }
};

export const signup = (input) => async (dispatch) => {
  try {
    const { data } = await api.api_signup(input);
    alert(`${data}로 회원가입 되었습니다. 다시 로그인해주세요`);
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.log(err.message);
  }
};
