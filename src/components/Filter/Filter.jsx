import PropTypes from 'prop-types';
import { FilterList } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterList>
      <h3>Find contacts by name</h3>
      <input type="text" value={value} onChange={onChange} ></input>
    </FilterList>
  );
};

Filter.propTypes={
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}