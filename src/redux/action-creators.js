import { createAction } from '@reduxjs/toolkit';

const changeContactsFilter = createAction('contacts/filter');

const actions = { changeContactsFilter };

export default actions;
