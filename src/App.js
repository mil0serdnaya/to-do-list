import './main.scss';

import { AppHeader } from './components/app-header/AppHeader';
import { AddToDo } from './components/add-to-do/AddToDo';
import { ToDoList } from './components/to-do-list/ToDoList';

export const App = () => {
  return (
    <div className="app__container">
      <AppHeader />
      <section className="to-do-app">
        <AddToDo />
        <ToDoList />
      </section>
    </div>
  );
}
