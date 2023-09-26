import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

export default function AddTask() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useTaskContext();

  const handleAddTask = () => {
    if (taskTitle.trim() !== '' && taskDescription.trim() !== '') {
      const newTask = {
        id: Date.now(),
        taskTitle: taskTitle,
        taskDescription: taskDescription,
      };
      addTask(newTask);
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <div className="add-task">
      <h2>Add Task:</h2>
      <input
        type="text"
        placeholder="Enter task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}