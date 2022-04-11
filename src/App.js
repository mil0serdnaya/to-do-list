import './main.scss';

import AppHeader from './components/app-header/AppHeader';
import AddToDo from './components/add-to-do/AddToDo';
import ToDoList from './components/to-do-list/ToDoList';

const App = () => {
  return (
    <div className="app-container">
      <AppHeader />
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
