import React from 'react';

function TodoList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div class="button-container">
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;