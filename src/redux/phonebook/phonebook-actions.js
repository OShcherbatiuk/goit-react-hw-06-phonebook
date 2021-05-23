import actionTypes from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = data => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    ...data,
  },
});
const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: actionTypes.FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
