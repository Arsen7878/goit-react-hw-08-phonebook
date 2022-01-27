import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

import {
  fetchCreateContact,
  fetchDeleteContact,
  fetchGetContacts,
  fetchUpdateContact,
} from 'services/contacts/API/contactFetchAPI';

export const addContact = createAsyncThunk(
  'contact/add',
  async ({ user, token }) => {
    try {
      return fetchCreateContact(user, token);
    } catch (error) {
      console.log('error');
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  ({ id, token }) => {
    return fetchDeleteContact(id, token);
  },
);

export const getContacts = createAsyncThunk('contact/getContacts', token => {
  return fetchGetContacts(token);
});

export const updateContact = createAsyncThunk(
  'contact/update',
  ({ data, id, token }) => {
    console.log(data);
    return fetchUpdateContact(data, id, token);
  },
);

export const filter = createAction('contacts/Filter');

export const stateModal = createAction('App/state/modal');
