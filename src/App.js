import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskItem/>
    </div>
  );
}

export default App;
