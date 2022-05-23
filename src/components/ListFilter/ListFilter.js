import './ListFilter.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../../redux/toDoSlice';

export const ListFilter = () => {
  const dispatch = useDispatch();
  const VISIBILITY_FILTER = useSelector(state => state.toDoList.VISIBILITY_FILTER);

  const handleClick = (event) => {
    dispatch(
      setVisibilityFilter(event.target.value)
    )
  }

  return(
    <footer className="list-filter">
      <button onClick={handleClick} value="ALL" className={`list-filter__btn  ${ VISIBILITY_FILTER === 'ALL' ? 'list-filter__btn--active':''}`}>All</button>
      <button onClick={handleClick} value="ACTIVE" className={`list-filter__btn ${ VISIBILITY_FILTER === 'ACTIVE' ? 'list-filter__btn--active':''}`}>Active</button>
      <button onClick={handleClick} value="COMPLETED" className={`list-filter__btn ${ VISIBILITY_FILTER === 'COMPLETED' ? 'list-filter__btn--active':''}`}>Completed</button>
    </footer>
  )
}
