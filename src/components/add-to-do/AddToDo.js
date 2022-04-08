import './add-to-do.scss';
import { useState } from 'react';

function AddToDo() {
  let [input, handleInputChange] = useState('');

  handleInputChange = (event) => {
    input = event.target.value;
  }

  const handleClick = () => {
    
  }

  return (
    <div className="add-to-do">
      <input type="text" name="add-to-do" className="add-to-do__input" placeholder="What needs to be done?" onChange={handleInputChange}></input>
      <button className="add-to-do__btn" onClick={handleClick}>Add</button>
      {input}
    </div>
  );
}

export default AddToDo;