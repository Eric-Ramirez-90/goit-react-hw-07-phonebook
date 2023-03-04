import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filterValue;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );

    return filteredContacts;
  }
);
