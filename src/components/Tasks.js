import React, { useState } from "react";
import TaskList from "./TaskList";

const Tasks = (props) => {
  const [active, setActive] = useState("type1");

  const toggleActive = (id) => {
    setActive(id);
  };

  const showAllTasks = () => {
    props.setTasks(props.tasks);
    toggleActive("type1");
  };

  const showActiveTasks = () => {
    const taskLists = props.tasks.filter((task) => !task.checked);
    props.setTasks(taskLists);
    toggleActive("type2");
  };

  const showCompletedTasks = () => {
    const taskLists = props.tasks.filter((task) => task.checked);
    props.setTasks(taskLists);
    toggleActive("type3");
  };

  const clearCompletedTasks = () => {
    const taskLists = props.tasks.filter((task) => !task.checked);
    props.setTasks(taskLists);
  };

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
            <p
              id="type1"
              className={active === "type1" ? "selected" : ""}
              onClick={showAllTasks}
            >
              All
            </p>
            <p
              id="type2"
              className={active === "type2" ? "selected" : ""}
              onClick={showActiveTasks}
            >
              Active
            </p>
            <p
              id="type3"
              className={active === "type3" ? "selected" : ""}
              onClick={showCompletedTasks}
            >
              Completed
            </p>
          </div>
          <p onClick={clearCompletedTasks}>Clear Completed</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
