import './to-do-item.scss';
import { useState } from "react";
import { deleteToDo, editToDo, toggleComplete } from '../../redux/toDoSlice';
import { useDispatch } from 'react-redux';

const ToDoItem = ({id, text, completed}) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);

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
        editToDo({id, newText})
      )
      setEditing(!isEditing);
    }
  };

  return (
    <li className={`to-do-item ${completed ? 'to-do-item--completed':''}`} onDoubleClick={() => {if(!completed) setEditing(!isEditing)}}>
      <button onClick={onToggleComplete} className="to-do-item__toggle"></button>
      { !isEditing && 
        <span className="to-do-item__text"> 
          {text}
        </span> 
      }
      { isEditing &&
      <input
        type="text"
        className="to-do-item__edit"
        defaultValue={text}
        onKeyDown={onEditToDo}
      >
      </input> }
      <button onClick={onDeleteToDo} className="to-do-item__del"></button>
    </li>
  );
}

export default ToDoItem;