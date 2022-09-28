import React from "react";
import DeleteTask from "../assets/icon-cross.svg";

const TaskList = (props) => {
  const handleDeleteTask = (id) => {
    const taskList = props.tasks.filter((task) => task.id !== id);
    props.setTasks(taskList);
  };

  const handleCompletedTask = (id) => {
    const taskList = props.tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    props.setTasks(taskList);
  };

  return (
    <li className={props.darkMode ? "dark" : null}>
      <input
        className={props.darkMode ? "dark" : null}
        type="checkbox"
        onChange={() => handleCompletedTask(props.task.id)}
        checked={props.task.checked}
      />
      <label
        className={props.darkMode ? "dark" : null}
        style={
          props.task.checked
            ? { textDecoration: "line-through", color: "hsl(236, 9%, 61%)" }
            : null
        }
        onDoubleClick={() => handleCompletedTask(props.task.id)}
      >
        {props.task.task}
      </label>
      {props.task.checked && (
        <img
          onClick={() => handleDeleteTask(props.task.id)}
          src={DeleteTask}
          alt=""
        />
      )}
    </li>
  );
};

export default TaskList;
