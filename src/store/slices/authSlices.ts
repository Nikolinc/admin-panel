import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import userList from "data/user.json";
import { IUser } from "type/user";

const User = localStorage.getItem("User");
localStorage.setItem("User", JSON.stringify(userList));

interface IAuthState {
  auth: IUser;
  loader: boolean;
}

const initialState: IAuthState = {
  auth: User !== null ? JSON.parse(User)[1] : [],
  loader: false,
};

const AuthSlices = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {},
});

export const AuthSelector = {
  getAuth: (state: RootState) => state.Auth.auth,
};

// export const { changeBackground, changeGrid, changeCell } = SoundSlices.actions;
export default AuthSlices;
