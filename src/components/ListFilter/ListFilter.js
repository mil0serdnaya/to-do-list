import './ListFilter.scss';

import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../../redux/toDoSlice';

export const ListFilter = () => {
  const dispatch = useDispatch();
  const buttons = document.querySelectorAll('.list-filter__btn');

  const handleClick = (event) => {
    buttons.forEach(button => {
      button.classList.remove('list-filter__btn--active');
    })
    event.target.classList.add('list-filter__btn--active');
    dispatch(
      setVisibilityFilter(event.target.value)
    )
  }

  return(
    <footer className="list-filter">
      <button onClick={handleClick} value="ALL" className="list-filter__btn list-filter__btn--active">All</button>
      <button onClick={handleClick} value="ACTIVE" className="list-filter__btn">Active</button>
      <button onClick={handleClick} value="COMPLETED" className="list-filter__btn">Completed</button>
    </footer>
  )
}
