import { PropTypes } from 'prop-types';
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

export default Filter;
