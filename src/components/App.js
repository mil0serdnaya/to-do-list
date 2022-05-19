import '../assets/styles/main.scss';

import { AppHeader } from './AppHeader/AppHeader';
import { AddToDo } from './AddToDo/AddToDo';
import { ToDoList } from './ToDoList/ToDoList';

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
