import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  email: string;
  userName: string;
};
const localStorageObj = JSON.parse(localStorage.getItem("user") || "{}");
const initialState = {
  value: !localStorageObj
    ? {
        email: "",
        userName: "",
      }
    : ({
        email: localStorageObj.email,
        userName: localStorageObj.userName,
      } as AuthState),
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      localStorage.clear();
      return {
        email: "",
        userName: "",
      } as AuthState as unknown as InitialState;
    },
    logIn: (_, action: PayloadAction<any>) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        value: action.payload,
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
