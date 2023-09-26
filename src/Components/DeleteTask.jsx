import React from "react";
import { useTaskContext } from "./TaskContext";

export default function DeleteTask ({ taskId }) {
  const { deleteTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(taskId);
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

