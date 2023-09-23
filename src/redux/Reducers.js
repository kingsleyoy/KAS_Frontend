import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
  userId: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },

    setLogOut: (state) => {
      state.auth = false;
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setAuth, setLogOut, setUserId } = userSlice.actions;

export default userSlice.reducer;
