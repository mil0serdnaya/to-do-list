import './to-do-item.scss';

function ToDoItem(props) {
  return (
    <li>{props.text}</li>
  );
}

export default ToDoItem;