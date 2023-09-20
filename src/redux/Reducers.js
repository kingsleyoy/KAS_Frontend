import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
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
  },
});

export const { setAuth, setLogOut } = userSlice.actions;

export default userSlice.reducer;
