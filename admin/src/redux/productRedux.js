import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSucess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Delete
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSucess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Update
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSucess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // Add
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSucess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSucess,
  getProductFailure,
  deleteProductFailure,
  deleteProductSucess,
  deleteProductStart,
  updateProductFailure,
  updateProductSucess,
  updateProductStart,
  addProductFailure,
  addProductSucess,
  addProductStart,
} = productSlice.actions;
export default productSlice.reducer;
