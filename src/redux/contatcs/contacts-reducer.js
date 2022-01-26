import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContacts,
  filter,
  stateModal,
  updateContact,
} from './contacts-operation';
import { logOut } from 'redux/auth/auth-operation';

const initialState = { items: [], filter: '', isModalOpen: false };

export const contactsReducer = createReducer(initialState, {
  [addContact.fulfilled]: (state, { payload }) => {
    state.items = [...state.items, payload];
  },

  [deleteContact.fulfilled]: (state, { meta }) => {
    state.items = state.items.filter(({ id }) => id !== meta.arg.id);
  },

  [getContacts.fulfilled]: (state, { payload }) => {
    state.items = payload;
  },

  [logOut.fulfilled]: (state, _) => {
    state.items = [];
  },

  [filter]: (state, { payload }) => {
    state.filter = payload;
  },

  [stateModal]: (state, { payload }) => {
    state.isModalOpen = payload;
  },

  [updateContact.fulfilled]: (state, { payload: { id, name, number } }) => {
    state.items = state.items.map(contact =>
      contact.id === id ? { ...contact, name, number } : contact,
    );
  },
});
