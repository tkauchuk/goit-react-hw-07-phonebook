import { createAction } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const addUsersContact = createAction('contacts/add', user => ({payload: {
    uid: uuidv4(),
    ...user
  }}));
const deleteUsersContact = createAction('contacts/delete');
const changeContactsFilter = createAction('contacts/filter');

const actions = { addUsersContact, deleteUsersContact, changeContactsFilter };

export default actions;
