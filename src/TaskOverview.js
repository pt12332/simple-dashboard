import React from 'react';
import './TaskOverview.css';

const TaskOverview = () => {
  const tasks = [
    { title: 'Nau com', dueDate: '2023-08-01', assignedTo: 'Alice', status: 'Pending' },
    { title: 'Clean up', dueDate: '2023-08-05', assignedTo: 'Bob', status: 'Completed' },
  ];

  return (
    <div className="task-overview">
      <h2 className="task-title">Task Overview</h2>
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <h3>{task.title}</h3>
          <p><strong>Due Date:</strong> {task.dueDate}</p>
          <p><strong>Assigned To:</strong> {task.assignedTo}</p>
          <p><strong>Status:</strong> {task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskOverview;
