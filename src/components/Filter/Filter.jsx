import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';
import shortid from 'shortid';
import s from './Filter.module.css';

const inputId = shortid.generate();

const Filter = ({ value, onChange }) => (
  <label htmlFor={inputId}>
    Find contacts by name
    <input
      className={s.lable}
      id={inputId}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
