import React, { useState, useEffect } from 'react';

function EditTask({ taskToEdit, onUpdate }) {
  const [task, setTask] = useState(taskToEdit);
   
  useEffect(() => {
    setTask(taskToEdit);
  }, [taskToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (task.trim() !== '') {
      onUpdate(task);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <div>
        <input
          type="text"
          placeholder="Edit your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Update Task</button>
      </div>
    </form>
  );
}

export default EditTask;