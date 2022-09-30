import React, { useContext } from "react";
import AddTask from "./components/AddTask";
import ExtraInfoMobile from "./components/Extra-info-mobile";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { TaskProvider } from "./components/store/TaskContext";
import TaskContext from "./components/store/TaskContext";

export default function App() {
  const { darkMode } = useContext(TaskContext);

  return (
    <TaskProvider>
      <div className={darkMode ? "App dark" : "App"}>
        <Header />
        <AddTask />
        <section className={darkMode ? "dark main-tasks" : "main-tasks"}>
          <Tasks />
        </section>

        <ExtraInfoMobile />
        <p className={darkMode ? "drag-drop dark" : "drag-drop"}>
          Drag and drop to reorder list
        </p>
      </div>
    </TaskProvider>
  );
}
