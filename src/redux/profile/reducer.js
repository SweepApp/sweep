import { createSlice } from "@reduxjs/toolkit";

export const profileInitialState = {
  matches: 0,
  history: [],
};

export const profileSlice = createSlice({
  name: "profilesData",
  initialState: profileInitialState,
  reducers: {
    setProfile: (state, action) => {
      const { matches, history } = action.payload;
      state.matches = matches;
      state.history = history;
    }
  }
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
