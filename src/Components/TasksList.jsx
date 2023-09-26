import React from "react";
import { useTaskContext } from "./TaskContext";
import SingleTask from "./SingleTask";
import DeleteTask from "./DeleteTask";

export default function TasksList() {
  const { tasks } = useTaskContext();

  return (
    <div className="tasks-list">
      <h2>Tasks:</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-list-item">
            <SingleTask task={task} className="single-task" />
            <DeleteTask taskId={task.id} className="delete-task" />
          </li>
        ))}
      </ul>
    </div>
  );
}
