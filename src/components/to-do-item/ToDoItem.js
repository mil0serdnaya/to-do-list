import './to-do-item.scss';
import { deleteToDo, editToDo, toggleComplete } from '../../redux/toDoSlice';
import { useDispatch } from 'react-redux';

const ToDoItem = ({id, text, completed, isEditing}) => {
  const dispatch = useDispatch();

  const onDeleteToDo = () => {
    dispatch(
      deleteToDo({id})
    )
  };

  const onToggleComplete = () => {
    dispatch(
      toggleComplete({id, completed: !completed})
    )
  };

  const onEditToDo = (event) => {
    let newText = event.target.value.trim();
    if (event.keyCode === 13 && !!newText) {
      dispatch(
        editToDo({id, newText, isEditing: !isEditing})
      )
    }
  };

  return (
    <li className={`to-do-item ${completed ? 'to-do-item--completed' :''} ${isEditing ? 'to-do-item--editing' :''}`}>
      <button onClick={onToggleComplete} className="to-do-item__toggle"></button>
      <span onDoubleClick={onEditToDo} className="to-do-item__text">
        {text}
      </span>
      <input 
        type="text"
        className="to-do-item__edit"
        value={text}
        onChange={onEditToDo}
      >
      </input>
      <button onClick={onDeleteToDo} className="to-do-item__del"></button>
    </li>
  );
}

export default ToDoItem;