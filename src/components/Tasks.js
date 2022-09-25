import React from "react";
import TaskList from "./TaskList";

const Tasks = (props) => {
  return (
    <React.Fragment>
      <div>
        <ul>
          {props.tasks.length ? (
            props.tasks.map((task) => (
              <TaskList
                key={task.id}
                setTasks={props.setTasks}
                tasks={props.tasks}
                task={task}
              />
            ))
          ) : (
            <p className="default-text">No tasks found</p>
          )}
        </ul>

        <div className="extra-info">
          <p>
            {props.tasks.length} {props.tasks.length > 1 ? "items" : "item"}{" "}
            left
          </p>
          <div className="selected-content">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>
          <p>Clear Completed</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
