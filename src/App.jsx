import React, { useState,useEffect } from 'react';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  // useEffect to load tasks from localStorage when the component first mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTaskIndex ? updatedTask : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };

  const editTask = (index) => {
    setCurrentTaskIndex(index);
    setIsEditing(true);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 style={{ color: '#c50d66',textDecorationLine:'underline'}}>
        <b>This is a Task Manager web page.</b>
      </h1>
      <h3>
        You can add multiple tasks at a time <br />
        and you can also delete or edit task.<br />
        ★ Your task will be saved in localStorage.
      </h3>
      {!isEditing ? (
        <AddTask onAdd={addTask} />
      ) : (
        <EditTask
          taskToEdit={tasks[currentTaskIndex]}
          onUpdate={updateTask}
        />
      )}
      <h2 style={{ backgroundColor: '#111f4d', color: 'white' }}>
        <b>Here is your task list :</b>
      </h2>
      <TodoList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;