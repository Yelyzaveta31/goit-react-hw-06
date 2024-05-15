import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectFilter: (state) => state.name,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;
