import TasksList from "./TasksList";
import AddTask from "./AddTask";
import { useTaskContext } from "./TaskContext";

export default function Home() {
  const { tasks } = useTaskContext();
  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
      </header>
      <main className="app-main">
        <AddTask />
        <div className="task-container">
          {tasks.length > 0 ? (
            <h2>Tasks:</h2> && <TasksList />
          ) : (
            <p>No tasks available.</p>
          )}
        </div>
      </main>
    </div>
  );
}
