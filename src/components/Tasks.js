import React from "react";
import TaskList from "./TaskList";

const Tasks = (props) => {
  return (
    <div>
      <ul>
        {props.tasks.map((task) => (
          <TaskList key={task.id} task={task.task} />
        ))}
      </ul>
      <div className="extra-info">
        <p>
          {props.tasks.length} {props.tasks.length > 1 ? "items" : "item"} left
        </p>
        <div className="selected-content">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear Completed</p>
      </div>
    </div>
  );
};

export default Tasks;
