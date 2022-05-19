import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLocalStorage, setInitialState } from '../../redux/toDoSlice';

import { ToDoItem } from '../to-do-item/ToDoItem';
import { ListFilter } from '../list-filter/ListFilter';

export const ToDoList = () => {
  const dispatch = useDispatch();
  
  const activeList = useSelector(state => state.toDoList.activeList);
  const allToDoItems = useSelector(state => state.toDoList.toDoItems);
  const completedToDos = useSelector(state => state.toDoList.toDoItems.filter((toDo) => toDo.completed));
  const activeToDos = useSelector(state => state.toDoList.toDoItems.filter((toDo) => !toDo.completed));

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('toDoItems'));
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
  }, [allToDoItems]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="to-do-list">
      <ul>
        { activeList === 'all' &&
          allToDoItems.map((toDo) => (
            <ToDoItem 
              key={toDo.id}
              id={toDo.id}
              text={toDo.text}
              completed={toDo.completed} />
          ))
        }
        { activeList === 'completed' &&
          completedToDos.map((toDo) => (
            <ToDoItem 
              key={toDo.id}
              id={toDo.id}
              text={toDo.text}
              completed={toDo.completed} />
          ))
        }
        { activeList === 'active' &&
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
