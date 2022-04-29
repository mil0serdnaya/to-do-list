import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLocalStorage, setInitialState } from '../../redux/toDoSlice';

import ToDoItem from '../to-do-item/ToDoItem'

const ToDoList = () => {
  const toDoItems = useSelector((state) => state.toDoList.toDoItems);
  const dispatch = useDispatch();

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('toDoItems'));
    if (storage.toDoItems.length) {
      dispatch(
        setInitialState(storage)
      )
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(
      setLocalStorage()
    )
  }, [toDoItems]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="to-do-list">
      <ul>
        {toDoItems.map((toDo) => (
          <ToDoItem 
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            completed={toDo.completed} />
        ))}
      </ul>
    </section>
  );
}

export default ToDoList;