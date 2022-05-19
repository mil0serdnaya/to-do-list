import './list-filter.scss';

import { useDispatch } from 'react-redux';
import { setActiveList } from '../../redux/toDoSlice';

export const ListFilter = () => {
  const dispatch = useDispatch();
  const buttons = document.querySelectorAll('.list-filter__btn');

  const handleClick = (event) => {
    buttons.forEach(button => {
      button.classList.remove('list-filter__btn--active');
    })
    event.target.classList.add('list-filter__btn--active');
    dispatch(
      setActiveList(event.target.value)
    )
  }

  return(
    <footer className="list-filter">
      <button onClick={handleClick} value="all" className="list-filter__btn list-filter__btn--active">All</button>
      <button onClick={handleClick} value="active" className="list-filter__btn">Active</button>
      <button onClick={handleClick} value="completed" className="list-filter__btn">Completed</button>
    </footer>
  )
}
