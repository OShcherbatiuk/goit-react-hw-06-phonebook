import actionTypes from './phonebook-types';

const formSubmitHandler = data => ({
  type: actionTypes.ADD,
  payload: data,
});
const deleteContact = value => ({
  type: actionTypes.DELETE,
  payload: value,
});

const changeFilter = value => ({
  type: actionTypes.FILTER,
  payload: value,
});

export { formSubmitHandler, deleteContact, changeFilter };
