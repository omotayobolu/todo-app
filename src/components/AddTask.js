import React, { useRef } from "react";
// import Check from "../assets/icon-check.svg";
// import Cancel from "../assets/icon-cross.svg";

const AddItem = (props) => {
  const inputRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      task: inputRef.current.value,
    };

    props.onAddTask(task);
  };

  return (
    <form onSubmit={handleSubmit} className="add-item">
      <input
        type="text"
        placeholder="Create a new todo.."
        ref={inputRef}
        // value={props.newTask}
        // onChange={(e) => props.setNewTask(e.target.value)}
        required
      />
      <button></button>
    </form>
  );
};

export default AddItem;
