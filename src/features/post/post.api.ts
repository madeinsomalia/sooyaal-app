import { createAsyncThunk } from "@reduxjs/toolkit";

import PostService from "./post.service";

export default class PostApi {
  public static getPosts = createAsyncThunk("post/getPosts", async () => {
    const response = await PostService.getPosts();
    return response;
  });

  public static getPostById = createAsyncThunk(
    "post/getPostById",
    async (id: string) => {
      const response = await PostService.getPostById(id);
      return response;
    }
  );
}
