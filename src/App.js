// Assets
import './main.scss';
import { useState } from 'react';

// Components
import AppHeader from './components/app-header/AppHeader';
import AddToDo from './components/add-to-do/AddToDo';
import ToDoList from './components/to-do-list/ToDoList';

function App() {
  let [toDos, onAddToDo] = useState([]);

  onAddToDo = (event) => {
    let toDo = event.target.value.trim();
    if (event.keyCode === 13 && !!toDo) {
      toDos.push({
        text: toDo,
        done: false
      });
      event.target.value = '';
      console.log(toDos);
    }
  }

  return (
    <div className="app-container">
      <AppHeader />
      <AddToDo onAddToDo={onAddToDo}/>
      <ToDoList />
    </div>
  );
}

export default App;
