import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavbarOpen: true,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNavbar: (state, action) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
  },
});

export const { toggleNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
