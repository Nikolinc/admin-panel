import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import userList from "data/user.json";
import { IUser } from "type/user";

const User = localStorage.getItem("User");
localStorage.setItem("User", JSON.stringify(userList));

interface IUserState {
  userList: IUser[];
  loader: boolean;
}

const initialState: IUserState = {
  userList: User !== null ? JSON.parse(User) : [],
  loader: false,
};

const UserSlices = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    userAdded: (state, action) => {
      state.userList.push({
        ...action.payload,
      });
      localStorage.setItem("User", JSON.stringify(state));
    },
  },
});

export const UserSelector = {
  getUserList: (state: RootState) => state.UserList.userList,
};

// export const { changeBackground, changeGrid, changeCell } = SoundSlices.actions;
export default UserSlices;
