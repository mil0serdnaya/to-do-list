import './to-do-list.scss';

function ToDoList(props) {
  const toDos = props.toDos;
  const toDoItems = toDos.map((item) => 
    <li key={item.id}>{item.text}</li>
  );
  return (
    <ul className="to-do-list">
      {toDoItems}
    </ul>
  );
}

export default ToDoList;