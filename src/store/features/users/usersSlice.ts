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
  },
});
export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
