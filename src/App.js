import './main.scss';

import AppHeader from './components/app-header/AppHeader';
import AddToDo from './components/add-to-do/AddToDo';
import ToDoList from './components/to-do-list/ToDoList';
import ListFilter from './components/list-filter/ListFilter';

const App = () => {
  return (
    <div className="app__container">
      <AppHeader />
      <section className="to-do-app">
        <AddToDo />
        <ToDoList />
        <ListFilter />
      </section>
    </div>
  );
}

export default App;
