import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operation';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import initialContacts from '../components/initialContacts';

//

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  reducers: {
    // addcontact: (state, action) => {
    //   const { name, number } = action.payload;
    //   const contact = {
    //     id: nanoid(),
    //     name,
    //     number,
    //   };
    //   state.contacts.unshift(contact);
    // },
    // deleteContact: (state, action) => {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },
    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filteredContacts } = contactsSlice.actions;
