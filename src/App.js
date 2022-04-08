// Assets
import './main.scss';

// Components
import AppHeader from './components/app-header/AppHeader';
import AddToDo from './components/add-to-do/AddToDo';

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <AddToDo />
    </div>
  );
}

export default App;
