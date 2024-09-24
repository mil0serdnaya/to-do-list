import './ListFilter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../../redux/toDoSlice';

const filters = [
  { value: 'ALL', label: 'All' },
  { value: 'ACTIVE', label: 'Active' },
  { value: 'COMPLETED', label: 'Completed' },
];

export const ListFilter = () => {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector(state => state.toDoList.visibilityFilter);

  const handleClick = (filterValue) => {
    dispatch(setVisibilityFilter(filterValue));
  };

  return (
    <footer className="list-filter">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => handleClick(value)}
          className={`list-filter__btn ${visibilityFilter === value ? 'list-filter__btn--active' : ''}`}
        >
          {label}
        </button>
      ))}
    </footer>
  );
};
