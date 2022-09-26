import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskstodo")) || []
  );

  useEffect(() => {
    localStorage.setItem("taskstodo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <main className="main-tasks">
        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}
