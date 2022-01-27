import { createReducer } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshCurrentUser } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
};

export const authReducer = createReducer(initialState, {
  [register.fulfilled]: (state, { payload }) => {
    if (payload) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    }
  },

  [logIn.fulfilled]: (state, { payload }) => {
    if (payload) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    }
  },
  [logOut.fulfilled]: (state, _) => {
    state.user = { name: null, email: null };
    state.user.email = null;
    state.token = null;
    state.isLoggedIn = false;
  },
  [refreshCurrentUser.fulfilled]: (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
  },
});
