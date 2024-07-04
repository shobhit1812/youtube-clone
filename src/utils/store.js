import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    side: sidebarSlice,
    chat: chatSlice,
    search: searchSlice,
  },
});

export default store;
