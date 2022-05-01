import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLocalStorage, setInitialState } from '../../redux/toDoSlice';

import ToDoItem from '../to-do-item/ToDoItem';
import ListFilter from '../list-filter/ListFilter';


const ToDoList = () => {
  const dispatch = useDispatch();
  const allToDoItems = useSelector((state) => state.toDoList.toDoItems);
  const completedToDos = useSelector((state) => state.toDoList.toDoItems.filter((toDo) => toDo.completed));

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
  }, [allToDoItems]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="to-do-list">
      <ul>
        {allToDoItems.map((toDo) => (
          <ToDoItem 
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            completed={toDo.completed} />
        ))}
      </ul>
      <ListFilter />
    </section>
  );
}

export default ToDoList;