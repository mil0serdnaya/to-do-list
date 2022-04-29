import './to-do-list.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLocalStorage } from '../../redux/toDoSlice';

import ToDoItem from '../to-do-item/ToDoItem'

const ToDoList = () => {
  const toDos = useSelector((state) => state.toDos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setLocalStorage()
    )
  }, [toDos]);

  return (
    <ul className="to-do-list">
			{toDos.map((toDo) => (
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