import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskItem/>
      <TaskList />
    </div>
  );
}

export default App;
