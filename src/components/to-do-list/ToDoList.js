import './to-do-list.scss';
import { useState, useEffect, useRef } from 'react';

const ToDoList = ({toDos}) => {
  const [internalState, setInternalState] = useState(toDos);
  const previousValueRef = useRef();
  const previousValue = previousValueRef.current;

  if (toDos !== previousValue && toDos !== internalState) {
    setInternalState(toDos);
  }
  
  useEffect(() => {
    previousValueRef.current = toDos;
  });

  return (
    <ul className="to-do-list">
      {internalState.map((toDo, i) =>
        <span key={i}>{toDo.text}</span>
      )}
    </ul>
  );
}

export default ToDoList;