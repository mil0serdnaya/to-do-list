import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo, editToDo, toggleComplete } from '../../redux/toDoSlice';
import './ToDoItem.scss';

export const ToDoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);

  const handleDelete = () => dispatch(deleteToDo({ id }));
  const handleToggleComplete = () => !isEditing && dispatch(toggleComplete({ id, completed: !completed }));
  
  const handleEdit = (event) => {
    const newText = event.target.value.trim();
    if (event.key === 'Enter' && newText) {
      dispatch(editToDo({ id, newText }));
      setEditing(false);
    }
  };

  return (
    <li 
      className={`to-do-item ${completed ? 'to-do-item--completed' : ''}`} 
      onDoubleClick={() => !completed && setEditing(true)}
    >
      <button onClick={handleToggleComplete} className="to-do-item__toggle"></button>
      {isEditing ? (
        <input
          type="text"
          className="to-do-item__edit"
          defaultValue={text}
          onKeyDown={handleEdit}
          autoFocus
        />
      ) : (
        <span className="to-do-item__text">{text}</span>
      )}
      <button onClick={handleDelete} className="to-do-item__del"></button>
    </li>
  );
};
