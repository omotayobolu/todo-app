import React from "react";

const Tasks = () => {
  const DUMMY_TASKS = [
    {
      id: "t1",
      task: "Wash clothes",
    },
    {
      id: "t2",
      task: "Wash shoe",
    },
    {
      id: "t3",
      task: "sleep",
    },
    {
      id: "t4",
      task: "code",
    },
    {
      id: "t5",
      task: " mikrimo",
    },
    {
      id: "t6",
      task: "eat",
    },
    {
      id: "t7",
      task: "eat",
    },
    {
      id: "t8",
      task: "eat",
    },
  ];

  return (
    <ul className="main-tasks">
      {DUMMY_TASKS.map((task) => {
        return (
          <li key={task.id}>
            <p>{task.task}</p>
            <button></button>
          </li>
        );
      })}
      <div className="extra-info">
        <p>5 items left</p>
        <div className="selected-content">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p>Clear Completed</p>
      </div>
    </ul>
  );
};

export default Tasks;
