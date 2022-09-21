import React from "react";
import ListTask from "./ListTask";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <ListTask key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
