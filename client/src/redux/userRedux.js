import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMsg: "",
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMsg = action.payload;
    },
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMsg = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
      state.errorMsg = "";
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;
