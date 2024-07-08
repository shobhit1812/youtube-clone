// commentsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    text: [],
  },
  reducers: {
    addComments: (state, action) => {
      state.text.push({ comment: action.payload, replies: [] });
    },
    addReplies: (state, action) => {
      const { commentIndex, replyText } = action.payload;
      state.text[commentIndex].replies.push(replyText);
    },
  },
});

export const { addComments, addReplies } = commentsSlice.actions;

export default commentsSlice.reducer;
