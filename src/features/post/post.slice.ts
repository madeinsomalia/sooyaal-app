import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
  },
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;
