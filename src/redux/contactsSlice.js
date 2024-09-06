import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [
        { id: 'qwe123', name: 'Mango', number: '123' },
        { id: 'asd987', name: 'Poly', number: '321' },
      ],
    },
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload.contact);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
