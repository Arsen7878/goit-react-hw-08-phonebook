import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchRegisterUser,
  fetchLogin,
  fetchLogout,
  fetchGetUser,
} from 'services/user/API/userFetchAPI';

export const register = createAsyncThunk('auth/register', data => {
  try {
    return fetchRegisterUser(data);
  } catch (error) {
    console.log('error register');
  }
});

export const logIn = createAsyncThunk('auth/logIn', data => {
  try {
    return fetchLogin(data);
  } catch (error) {
    console.log('ошибка авторизации');
  }
});

export const logOut = createAsyncThunk('auth/logOut', token => {
  try {
    return fetchLogout(token);
  } catch (error) {
    console.log('error logout');
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return thunkAPI.rejectWithValue();
      }
      return fetchGetUser(token);
    } catch (error) {
      console.log('error refresh');
    }
  },
);
