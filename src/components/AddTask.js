import React, { useContext, useRef } from "react";
import TaskContext from "./store/TaskContext";

const AddTask = () => {
  const inputRef = useRef("");

  const { handleSubmitTask, darkMode, newTask, setNewTask } =
    useContext(TaskContext);

  return (
    <form onSubmit={handleSubmitTask} className="add-item">
      <input
        type="text"
        className={darkMode ? "dark" : null}
        placeholder="Create a new todo.."
        ref={inputRef}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required
      />
      <button className={darkMode ? "dark" : null}></button>
    </form>
  );
};

export default AddTask;
