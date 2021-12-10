import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSucess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSucess,
  addProductFailure,
  addProductStart,
  addProductSucess,
  updateProductFailure,
  updateProductStart,
  updateProductSucess,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const getproducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSucess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteproducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSucess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
export const updateproducts = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSucess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addproducts = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSucess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
