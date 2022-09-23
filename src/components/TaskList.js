import React from "react";

const TaskList = (props) => {
  return (
    <li>
      <input type="checkbox" />
      <label>{props.task}</label>
    </li>
  );
};

export default TaskList;
