import { loginFailure, loginStart, loginSuccess, logOut } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
    console.log(err.response.data);
  }
};
export const logout = async (dispatch) => {
  dispatch(logOut());
};
