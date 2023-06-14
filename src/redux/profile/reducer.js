import { createSlice } from "@reduxjs/toolkit";

export const profileInitialState = {
  matchs: 0,
  history: [],
};

export const profileSlice = createSlice({
  name: "profilesData",
  initialState: profileInitialState,
  reducers: {
    setProfile: (state, action) => {
      const { matchs, history } = action.payload;
      state.matchs = matchs;
      state.history = history;
    }
  }
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
