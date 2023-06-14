import { createSlice } from "@reduxjs/toolkit";

export const friendInitialState = {
  friends: [],
};

export const friendSlice = createSlice({
  name: "friendsData",
  initialState: friendInitialState,
  reducers: {
    setFriends: (state, action) => {
      const { friends } = action.payload;
      state.friends = friends;
    },
  },
});

export const { setFriends } = friendSlice.actions;
export default friendSlice.reducer;
