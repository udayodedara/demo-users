import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  favUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.list = action.payload;
    },
    addToFav: (state, action) => {
      state.favUsers = [action.payload, ...state.favUsers];
    },
    removeFromFav: (state, action) => {
      state.favUsers = state.favUsers.filter((item) => item !== action.payload);
    },
    removeUser: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      state.favUsers = state.favUsers.filter((item) => item !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, data } = action.payload;
      const userIndex = state.list.findIndex((user) => user.id === id);
      if (userIndex) {
        state.list[userIndex] = { ...state.list[userIndex], ...data };
      }
    },
  },
});

export const { addUsers, addToFav, removeFromFav, removeUser, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
