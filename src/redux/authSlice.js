import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!Cookies.get("token"),
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      Cookies.set("token", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      Cookies.remove("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
