import './to-do-list.scss';
import { useState, useEffect } from 'react';

function ToDoList({toDos}) {
  const [toDosArr, setToDos] = useState(toDos);
  
  useEffect(() => {
    setToDos(toDos);
  }, [toDos]);

  return (
    <ul className="to-do-list">
      {toDosArr.map((toDo, i) =>
        <span key={i}>{toDo.text}</span>
      )}
    </ul>
  );
}

export default ToDoList;