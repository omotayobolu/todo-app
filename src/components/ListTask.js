import React from "react";

const ListTask = (props) => {
  return (
    <li>
      <input type="checkbox" />
      <label>{props.task}</label>
    </li>
  );
};

export default ListTask;
