import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { setLocalStorage, setInitialState } from '../../redux/toDoSlice';

import { ToDoItem } from '../ToDoItem/ToDoItem';
import { ListFilter } from '../ListFilter/ListFilter';

export const ToDoList = () => {
  const dispatch = useDispatch();
  const { visibilityFilter, toDoItems } = useSelector(state => state.toDoList);

  const completedToDos = useMemo(() => toDoItems.filter(toDo => toDo.completed), [toDoItems]);
  const activeToDos = useMemo(() => toDoItems.filter(toDo => !toDo.completed), [toDoItems]);

  useEffect(() => {
    const storedList = localStorage.getItem('toDoList');
    if (storedList) {
      dispatch(setInitialState(JSON.parse(storedList)));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLocalStorage());
  }, [dispatch, toDoItems, visibilityFilter]);

  return (
    <section className="to-do-list">
      <ul>
        { visibilityFilter === 'ALL' &&
          toDoItems.map((toDo) => (
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
