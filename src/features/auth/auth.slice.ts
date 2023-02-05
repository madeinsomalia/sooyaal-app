import { createSlice } from "@reduxjs/toolkit";
import { register, login } from "./auth.api";
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  photoURL: string;

  // Add other fields here
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.data;
      state.isAuthenticated = true;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
