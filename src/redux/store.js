import { createReducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import actions from './action-creators';
import { contactsApi } from './service';

const filter = createReducer('', {
  [actions.changeContactsFilter]: (_, {payload}) => payload
});

const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development'
});

export default store;

