import './to-do-item.scss';

const ToDoItem = (props) => {
  return (
    <li>{props.text}</li>
  );
}

export default ToDoItem;