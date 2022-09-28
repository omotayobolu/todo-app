import React, { useRef, useState } from "react";
// import Check from "../assets/icon-check.svg";
// import Cancel from "../assets/icon-cross.svg";

const AddTask = (props) => {
  const inputRef = useRef("");

  const [newTask, setNewTask] = useState("");

  const AddTask = (task) => {
    const id = props.tasks.length
      ? props.tasks[props.tasks.length - 1].id + 1
      : 1;
    const myNewTask = { id, checked: false, task };
    const tasksList = [...props.tasks, myNewTask];
    props.setTasks(tasksList);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (!newTask) return;
    AddTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmitTask} className="add-item">
      <input
        type="text"
        className={props.darkMode ? "dark" : null}
        placeholder="Create a new todo.."
        ref={inputRef}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required
      />
      <button className={props.darkMode ? "dark" : null}></button>
    </form>
  );
};

export default AddTask;
