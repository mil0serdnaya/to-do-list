import './add-to-do.scss';

function AddToDo(props) {
  const handleKeyUp = (event) => {
    props.onAddToDo(event);
  }

  return (
    <div className="add-to-do">
      <input type="text" name="add-to-do" className="add-to-do__input" onKeyUp={handleKeyUp} placeholder="What needs to be done?"></input>
    </div>
  );
}

export default AddToDo;