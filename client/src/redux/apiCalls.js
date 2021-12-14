import {
  loginFailure,
  loginStart,
  loginSuccess,
  logOut,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("auth/register", user);
    dispatch(registerSuccess());
    alert("Registration Successfull!!");
  } catch (err) {
    dispatch(registerFailure(err.response.data?._message));
  }
};
export const logout = async (dispatch) => {
  dispatch(logOut());
};
