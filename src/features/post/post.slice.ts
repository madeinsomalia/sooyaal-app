import { Post } from "@/interfaces/post";
import { createSlice, Dispatch } from "@reduxjs/toolkit";
import PostService from "./post.service";

interface Posts {
  posts: Post[];
  loading: boolean;
  error: null | string;
}

const initialState: Posts = {
  posts: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsLoading: (state) => {
      state.loading = true;
    },

    getPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    getPostsError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    dispatch(postSlice.actions.getPostsLoading());
    const posts = await PostService.getPosts();
    dispatch(postSlice.actions.getPosts(posts));
  } catch (error) {
    dispatch(postSlice.actions.getPostsError(error));
  }
};

export default postSlice.reducer;
