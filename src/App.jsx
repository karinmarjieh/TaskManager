import Home from "./Components/Home";
import { TaskProvider } from "./Components/TaskContext";
import "./App.css";

export default function App() {
  return (
    <>
      <TaskProvider>
        <Home />
      </TaskProvider>
    </>
  );
}
