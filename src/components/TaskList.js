import React, { useContext } from "react";
import DeleteTask from "../assets/icon-cross.svg";
import { Draggable } from "react-beautiful-dnd";
import TaskContext from "./store/TaskContext";

const TaskList = (props) => {
  const { handleCompletedTask, handleDeleteTask } = useContext(TaskContext);
  return (
    <Draggable
      key={props.task.id.toString()}
      draggableId={props.task.id.toString()}
      index={props.index}
    >
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={props.darkMode ? "dark" : null}
        >
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
      )}
    </Draggable>
  );
};

export default TaskList;
