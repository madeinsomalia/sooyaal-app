import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; data: User }>) => {
      state.token = action.payload.token;
      state.user = action.payload.data;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
