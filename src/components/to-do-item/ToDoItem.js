import './to-do-item.scss';

const ToDoItem = (props) => {
  return (
    <li className="to-do-item">{props.text}</li>
  );
}

export default ToDoItem;