import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLocalStorage, setInitialState } from '../../redux/toDoSlice';

import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ListFilter } from '../ListFilter/ListFilter';

export const ToDoList = () => {
  const dispatch = useDispatch();
  
  const visibilityFilter = useSelector(state => state.toDoList.visibilityFilter);
  const allToDoItems = useSelector(state => state.toDoList.toDoItems);
  const completedToDos = useSelector(state => state.toDoList.toDoItems.filter((toDo) => toDo.completed));
  const activeToDos = useSelector(state => state.toDoList.toDoItems.filter((toDo) => !toDo.completed));

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('toDoList'));
    if (storage) {
      dispatch(
        setInitialState(storage)
      )
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch(
      setLocalStorage()
    )
  }, [allToDoItems, visibilityFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="to-do-list">
      <ul>
        { visibilityFilter === 'ALL' &&
          allToDoItems.map((toDo) => (
            <ToDoItem 
              key={toDo.id}
              id={toDo.id}
              text={toDo.text}
              completed={toDo.completed} />
          ))
        }
        { visibilityFilter === 'COMPLETED' &&
          completedToDos.map((toDo) => (
            <ToDoItem 
              key={toDo.id}
              id={toDo.id}
              text={toDo.text}
              completed={toDo.completed} />
          ))
        }
        { visibilityFilter === 'ACTIVE' &&
          activeToDos.map((toDo) => (
            <ToDoItem 
              key={toDo.id}
              id={toDo.id}
              text={toDo.text}
              completed={toDo.completed} />
          ))
        }
      </ul>
      <ListFilter />
    </section>
  );
}
