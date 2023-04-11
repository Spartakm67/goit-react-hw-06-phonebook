// import PropTypes from 'prop-types';
// import { FilterList } from './Filter.styled';

// export const Filter = ({ value, onChange }) => {
//   return (
//     <FilterList>
//       <h3>Find contacts by name</h3>
//       <input type="text" value={value} onChange={onChange} ></input>
//     </FilterList>
//   );
// };

// Filter.propTypes={
//   value:PropTypes.string.isRequired,
//   onChange:PropTypes.func.isRequired,
// }

import { FilterList } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors'; 

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterList>
      <h3>Find contacts by name</h3>
      <input type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.currentTarget.value))} ></input>
    </FilterList>
  );
};

// Filter.propTypes={
//   value:PropTypes.string.isRequired,
//   onChange:PropTypes.func.isRequired,
// }