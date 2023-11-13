import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserStructure, UsersStateStructure } from "./types";

const initialUserState: UsersStateStructure = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    loadUsers: (
      currentState: UsersStateStructure,
      action: PayloadAction<UserStructure[]>,
    ): UsersStateStructure => ({ ...currentState, users: action.payload }),
    addUser: (
      currentState: UsersStateStructure,
      action: PayloadAction<UserStructure>,
    ): UsersStateStructure => ({
      ...currentState,
      users: [...currentState.users, action.payload],
    }),
  },
});
export const {
  loadUsers: loadUsersActionCreator,
  addUser: addUserActionCreator,
} = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
