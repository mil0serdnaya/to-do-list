import './to-do-item.scss';
import { deleteToDo, toggleComplete } from '../../redux/toDoSlice';
import { useDispatch } from 'react-redux';

const ToDoItem = ({id, text, completed}) => {
  const dispatch = useDispatch();

  const onDeleteToDo = () => {
    dispatch(
      deleteToDo({id})
    )
  };

  const onToggleToDo = () => {
    dispatch(
      toggleComplete({id, completed: !completed})
    )
  };

  return (
    <li className={`to-do-item ${completed && 'to-do-item--completed'}`}>
      <button onClick={onToggleToDo} className="to-do-item__toggle"></button>
      <label className="to-do-item__text">
        {text}
      </label>
      <button onClick={onDeleteToDo} className="to-do-item__del"></button>
    </li>
  );
}

export default ToDoItem;