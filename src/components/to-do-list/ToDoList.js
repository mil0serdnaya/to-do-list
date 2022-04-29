import './to-do-list.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLocalStorage } from '../../redux/toDoSlice';

import ToDoItem from '../to-do-item/ToDoItem'

const ToDoList = () => {
  const toDoItems = useSelector((state) => state.toDoList.toDoItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setLocalStorage()
    )
  }, [toDoItems]);

  return (
    <ul className="to-do-list">
			{toDoItems.map((toDo) => (
				<ToDoItem 
          key={toDo.id} 
          id={toDo.id} 
          text={toDo.text} 
          completed={toDo.completed} />
			))}
    </ul>
  );
}

export default ToDoList;