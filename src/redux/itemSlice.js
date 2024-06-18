import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    selectedItem: null,
    loading: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setItems, selectItem, setLoading } = itemSlice.actions;
export default itemSlice.reducer;
