import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TUsers = {
  id: string;
  email: string;
  role: string;
  status?: string;
  iat: number;
  exp: number;
};
type TAuthSlice = {
  user: null | TUsers;
  token: null | string;
  refreshToken: null | string;
};
const initialState: TAuthSlice = {
  user: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "authInfo",
  initialState,

  reducers: {
    setUser: (state, action) => {
      const { token, user, refreshToken } = action.payload;
      state.user = user;
      state.token = token;
      if (refreshToken !== undefined) {
        state.refreshToken = refreshToken;
      }
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.refreshToken = null;
    },
  },
});

export const { logOut, setUser } = authSlice.actions;
export const currentUser = (state: RootState) => state.auth.user;
export const currentToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
