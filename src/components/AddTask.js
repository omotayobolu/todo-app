import React, { useRef, useState } from "react";
// import Check from "../assets/icon-check.svg";
// import Cancel from "../assets/icon-cross.svg";

const AddItem = (props) => {
  const inputRef = useRef("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function AddTaskHandler(taskText) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://todo-app-5964a-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify({ task: taskText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();

      const generatedId = data.name;
      const createdTask = { id: generatedId, task: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredTask = inputRef.current.value;

    if (enteredTask.trim().length > 0) {
      AddTaskHandler(enteredTask);
    }
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
