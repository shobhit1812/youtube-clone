import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import commentsSlice from "./commentsSlice";

const store = configureStore({
  reducer: {
    side: sidebarSlice,
    chat: chatSlice,
    search: searchSlice,
    comments: commentsSlice,
  },
});

export default store;
