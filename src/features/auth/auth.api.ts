import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "./auth.service";

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await AuthService.register(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  "auth/login",
  async (user: any, thunkAPI) => {
    try {
      return await AuthService.login(user);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
