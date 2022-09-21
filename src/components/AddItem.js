import React, { useRef } from "react";
// import Check from "../assets/icon-check.svg";
// import Cancel from "../assets/icon-cross.svg";

const AddItem = (props) => {
  const inputRef = useRef();

  return (
    <form onSubmit={props.onSubmitTask} className="add-item">
      <input
        type="text"
        placeholder="Create a new todo.."
        ref={inputRef}
        value={props.newTask}
        onChange={(e) => props.setNewTask(e.target.value)}
        required
      />
      <button type="submit" onClick={() => inputRef.current.focus()}></button>
    </form>
  );
};

export default AddItem;
