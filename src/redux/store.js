import { createReducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import actions from './action-creators';
import { contactsApi } from './service';

const items = createReducer([],{
  [actions.addUsersContact]: (state, {payload}) => [payload, ...state],
  [actions.deleteUsersContact]: (state, {payload}) => state.filter(({uid}) => uid !== payload),
});

const filter = createReducer('', {
  [actions.changeContactsFilter]: (_, {payload}) => payload
});
const reducer = combineReducers({items, filter});

const store = configureStore({
  reducer: {
    contacts: reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development'
});

export default store;

