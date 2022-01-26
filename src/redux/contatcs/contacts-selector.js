import { createSelector } from 'reselect';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getStateModal = state => state.contacts.isModalOpen;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);
