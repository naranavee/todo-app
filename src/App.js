import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TaskForm />
      <Filter />
      <TaskList />
    </div>
  );
};

export default App;
