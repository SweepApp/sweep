import { createSlice } from "@reduxjs/toolkit";

export const statsInitialState = {
  matches: 0,
  history: [],
};

export const statsSlice = createSlice({
  name: "statsDetails",
  initialState: statsInitialState,
  reducers: {
    setProfile: (state, action) => {
      const { matches, history } = action.payload;
      state.matches = matches;
      state.history = history;
    }
  }
});

export const { setProfile } = statsSlice.actions;
export default statsSlice.reducer;
