import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLightMode: false,
  },
  reducers: {
    changeTheme: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
