import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  const [darkMode, setDarkMode] = useState("");

  const ModeToggler = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskstodo")) || []
  );

  useEffect(() => {
    localStorage.setItem("taskstodo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Header darkMode={darkMode} onToggleMode={ModeToggler} />
      <AddTask tasks={tasks} setTasks={setTasks} darkMode={darkMode} />
      <main className={darkMode ? "dark main-tasks" : "main-tasks"}>
        <Tasks tasks={tasks} setTasks={setTasks} darkMode={darkMode} />
      </main>
    </div>
  );
}
