import './add-to-do.scss';

import { useDispatch } from 'react-redux';
import { addToDo, setLocalStorage } from '../../redux/toDoSlice';

const AddToDo = () => {
  const dispatch = useDispatch();
  
  const onAddToDo = (event) => {
    let toDo = event.target.value.trim();
    if (event.keyCode === 13 && !!toDo) {
      dispatch(
        addToDo({
          text: toDo,
        })
      )
      event.target.value = '';
    }
  }

  return (
    <div className="add-to-do">
      <input 
        type="text" 
        className="add-to-do__input" 
        onKeyUp={onAddToDo} 
        placeholder="What needs to be done?">
      </input>
    </div>
  );
}

export default AddToDo;