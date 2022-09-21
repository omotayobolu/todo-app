import React from "react";
import TaskList from "./TaskList";

const Tasks = (props) => {
  return (
    <div>
      {props.tasks.length ? (
        <TaskList tasks={props.tasks} />
      ) : (
        <p className="default-text">No tasks found</p>
      )}
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
