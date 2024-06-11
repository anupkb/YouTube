import { configureStore } from "@reduxjs/toolkit";
import navbarReduce from "./navbarSlice";

const appStore = configureStore({
  reducer: {
    navbar: navbarReduce,
  },
});

export default appStore;
