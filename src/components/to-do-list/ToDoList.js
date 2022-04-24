import './to-do-list.scss';
import ToDoItem from '../to-do-item/ToDoItem'
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const toDos = useSelector((state) => state.toDos);

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