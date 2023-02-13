import React, { useContext } from "react";
import TaskContext from "./store/TaskContext";

const Dragdrop = () => {
  const { darkMode } = useContext(TaskContext);
  return (
    <p className={darkMode ? "dark drag-drop" : "drag-drop"}>
      Drag and drop to reorder list
    </p>
  );
};

export default Dragdrop;
