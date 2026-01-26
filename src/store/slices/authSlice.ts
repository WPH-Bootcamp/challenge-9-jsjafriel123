import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/auth";

// Define a type for the slice state
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Get initial state from localStorage if available
const token = localStorage.getItem("access_token");
const user = localStorage.getItem("user");

const initialState: AuthState = {
  token,
  user: user ? JSON.parse(user) : null,
  isAuthenticated: Boolean(token),
};

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      localStorage.setItem("access_token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
