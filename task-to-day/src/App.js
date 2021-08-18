import Button from './components/Button';
import FormInput from './components/FormInput';
import ToDoItem from './components/ToDoItem';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h3>Task To Do</h3>
      </div>

      <div class="list">
        <ToDoItem/>
      </div>

      <div class="input-form">
        <FormInput/>
      </div>
    </div>
  );
}

export default App;
