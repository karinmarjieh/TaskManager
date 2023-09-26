import Home from "./Components/Home";
import { TaskProvider } from "./Components/TaskContext";
export default function App() {
  return (
    <>
      <TaskProvider>
        <Home />
      </TaskProvider>
    </>
  );
}
