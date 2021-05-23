import { combineReducers } from 'redux';
import types from './phonebook-types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      const isNoUnique = state.find(contact => contact.name === payload.name);
      if (isNoUnique) {
        alert(`${payload.name} is alredy in contacts`);
        return state;
      } else {
        return [...state, payload];
      }
    // eslint-disable-next-line no-fallthrough
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
