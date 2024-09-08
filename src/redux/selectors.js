import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts.items;
export const selectLoading = ({ contacts }) => contacts.loading;
export const selectError = ({ contacts }) => contacts.error;
export const selectNameFilter = ({ filters }) => filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, searchName) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(searchName))
);
