import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const reduxSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = reduxSlice.actions;
export default reduxSlice.reducer;
