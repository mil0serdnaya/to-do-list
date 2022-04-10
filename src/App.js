// Assets
import './main.scss';
import { useState } from 'react';

// Components
import AppHeader from './components/app-header/AppHeader';
import AddToDo from './components/add-to-do/AddToDo';
import ToDoList from './components/to-do-list/ToDoList';

function App() {
  let [toDos, onAddToDo] = useState([]);

  const setId = (array) => {
    array.forEach((item, index) => item.id = index + 1);
  }

  onAddToDo = (event) => {
    let toDo = event.target.value.trim();
    if (event.keyCode === 13 && !!toDo) {
      toDos.push({
        text: toDo,
        completed: false
      });
      event.target.value = '';
    }
    setId(toDos);
  }

  return (
    <div className="app-container">
      <AppHeader />
      <AddToDo onAddToDo={onAddToDo}/>
      <ToDoList key="676" toDos={toDos}/>
    </div>
  );
}

export default App;
