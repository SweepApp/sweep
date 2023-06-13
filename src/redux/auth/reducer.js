import { createSlice } from '@reduxjs/toolkit';

export const userInitialState = {
  username: null,
  isLoggedIn: false,
  token: null,
};

export const userSlice = createSlice({
  name: 'usersData',
  initialState: userInitialState,
  reducers: {
    setAuth: (state, action) => {
      const { username, isLoggedIn, token } = action.payload;
      state.username = username;
      state.isLoggedIn = isLoggedIn;
      state.token = token;
    },
  },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;