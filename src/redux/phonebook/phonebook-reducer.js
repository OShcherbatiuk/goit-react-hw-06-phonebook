import { combineReducers } from 'redux';
import actionTypes from './phonebook-types';

const contacts = (state = [], { type, payload }) => {
  return state;
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  contacts,
  filter,
});
