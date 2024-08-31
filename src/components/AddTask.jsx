import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (task.trim() !== '') {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default AddTask;