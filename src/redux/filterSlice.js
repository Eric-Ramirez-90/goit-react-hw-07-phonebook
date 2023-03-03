import { createSlice } from '@reduxjs/toolkit';

const filterSilce = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSilce.reducer;

export const { filteredContacts } = filterSilce.actions;
