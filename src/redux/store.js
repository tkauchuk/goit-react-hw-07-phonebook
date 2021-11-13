import { createReducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import actions from './action-creators';

const items = createReducer([],{
  [actions.addUsersContact]: (state, {payload}) => [payload, ...state],
  [actions.deleteUsersContact]: (state, {payload}) => state.filter(({uid}) => uid !== payload)
});
const filter = createReducer('', {
  [actions.changeContactsFilter]: (_, {payload}) => payload
});
const reducer = combineReducers({items, filter});

const store = configureStore({
  reducer: {
    contacts: reducer
  },
  devTools: process.env.NODE_ENV === 'development'
});

export default store;

