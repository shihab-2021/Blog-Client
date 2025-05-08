import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("navigateTo", "null");
      document.cookie = `accessToken=${token}; path=/; secure; samesite=Lax; max-age=86400`;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      document.cookie =
        "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=Lax";
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const useCurrentToken = (state) => state.auth.token;
export const selectCurrentUser = (state) => state.auth.user;
