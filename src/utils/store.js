import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

const store = configureStore({
  reducer: {
    side: sidebarSlice,
  },
});

export default store;
