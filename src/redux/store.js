import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
