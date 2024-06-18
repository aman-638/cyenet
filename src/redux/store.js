// authSlice.js and itemSlice.js
import { createSlice } from "@reduxjs/toolkit";

// store.js
import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    item: itemReducer,
    auth: authReducer,
  },
});

export default store;
