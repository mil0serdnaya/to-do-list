import './to-do-item.scss';
import { deleteToDo } from '../../redux/toDoSlice';
import { useDispatch } from 'react-redux';

const ToDoItem = ({id, text, completed}) => {
  const dispatch = useDispatch();
  const onDeleteToDo = () => {
    dispatch(
      deleteToDo({id})
    )
  };

  return (
    <li className="to-do-item">
      <label className="to-do-item__text">
        {text}
      </label>
      <button onClick={onDeleteToDo} className="to-do-item__del"></button>
    </li>
  );
}

export default ToDoItem;