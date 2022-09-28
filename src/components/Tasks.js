import React from "react";
import TaskList from "./TaskList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Tasks = (props) => {
  const clearCompletedTasks = () => {
    const taskLists = props.tasks.filter((task) => !task.checked);
    props.setTasks(taskLists);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(props.tasks);
    const [reordereditem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordereditem);

    props.setTasks(items);
  }

  return (
    <React.Fragment>
      <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="lists">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {props.tasks.length ? (
                  props.tasks.map((task, index) => (
                    <TaskList
                      key={task.id}
                      setTasks={props.setTasks}
                      tasks={props.tasks}
                      task={task}
                      darkMode={props.darkMode}
                      index={index}
                    />
                  ))
                ) : (
                  <p
                    className={
                      props.darkMode ? "default-text dark" : "default-text "
                    }
                  >
                    No tasks found
                  </p>
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <div className={props.darkMode ? "dark extra-info" : "extra-info"}>
          <span>
            {props.tasks.length} {props.tasks.length > 1 ? "items" : "item"}{" "}
            left
          </span>
          <div className="selected-content">
            <p
              id="type1"
              className={props.active === "type1" ? "selected" : ""}
              onClick={props.showAllTasks}
            >
              All
            </p>
            <p
              id="type2"
              className={props.active === "type2" ? "selected" : ""}
              onClick={props.showActiveTasks}
            >
              Active
            </p>
            <p
              id="type3"
              className={props.active === "type3" ? "selected" : ""}
              onClick={props.showCompletedTasks}
            >
              Completed
            </p>
          </div>
          <p
            className={props.darkMode ? "dark" : null}
            onClick={clearCompletedTasks}
          >
            Clear Completed
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
