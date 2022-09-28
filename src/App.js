import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskstodo")) || []
  );
  const [darkMode, setDarkMode] = useState("");
  const [active, setActive] = useState("type1");

  const toggleActive = (id) => {
    setActive(id);
  };

  const ModeToggler = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("taskstodo", JSON.stringify(tasks));
  }, [tasks]);

  const showAllTasks = () => {
    setTasks(tasks);
    toggleActive("type1");
  };

  const showActiveTasks = () => {
    const taskLists = tasks.filter((task) => !task.checked);
    setTasks(taskLists);
    toggleActive("type2");
  };

  const showCompletedTasks = () => {
    const taskLists = tasks.filter((task) => task.checked);
    setTasks(taskLists);
    toggleActive("type3");
  };

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Header darkMode={darkMode} onToggleMode={ModeToggler} />
      <AddTask tasks={tasks} setTasks={setTasks} darkMode={darkMode} />
      <section className={darkMode ? "dark main-tasks" : "main-tasks"}>
        <Tasks
          active={active}
          toggleActive={toggleActive}
          tasks={tasks}
          setTasks={setTasks}
          darkMode={darkMode}
          showAllTasks={showAllTasks}
          showActiveTasks={showActiveTasks}
          showCompletedTasks={showCompletedTasks}
        />
      </section>
      <section
        className={
          darkMode ? "dark selected-content-mobile" : "selected-content-mobile"
        }
      >
        <p
          id="type1"
          className={active === "type1" ? "selected" : ""}
          onClick={showAllTasks}
        >
          All
        </p>
        <p
          id="type2"
          className={active === "type2" ? "selected" : ""}
          onClick={showActiveTasks}
        >
          Active
        </p>
        <p
          id="type3"
          className={active === "type3" ? "selected" : ""}
          onClick={showCompletedTasks}
        >
          Completed
        </p>
      </section>
      <p className={darkMode ? "drag-drop dark" : "drag-drop"}>
        Drag and drop to reorder list
      </p>
    </div>
  );
}
