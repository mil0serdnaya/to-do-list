import './add-to-do.scss';

function AddToDo() {
  const toDos = [];

  const handleKeyUp = (event) => {
    let toDo = event.target.value.trim();
    if (event.keyCode === 13 && !!toDo) {
      toDos.push({
        text: toDo
      });
      event.target.value = '';
    }
  }

  return (
    <div className="add-to-do">
      <input type="text" name="add-to-do" className="add-to-do__input" onKeyUp={handleKeyUp} placeholder="What needs to be done?"></input>
    </div>
  );
}

export default AddToDo;