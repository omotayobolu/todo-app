import React, { useContext } from "react";
import TaskList from "./TaskList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskContext from "./store/TaskContext";

const Tasks = () => {
  const {
    tasks,
    setTasks,
    darkMode,
    active,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
    handleOnDragEnd,
    clearCompletedTasks,
  } = useContext(TaskContext);

  return (
    <React.Fragment>
      <div className={darkMode ? "dark main-tasks" : "main-tasks"}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="lists">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.length ? (
                  tasks.map((task, index) => (
                    <TaskList
                      key={task.id}
                      setTasks={setTasks}
                      tasks={tasks}
                      task={task}
                      darkMode={darkMode}
                      index={index}
                    />
                  ))
                ) : (
                  <p
                    className={darkMode ? "default-text dark" : "default-text "}
                  >
                    No tasks found
                  </p>
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div className={darkMode ? "dark extra-info" : "extra-info"}>
          <span>
            {tasks.length} {tasks.length > 1 ? "items" : "item"} left
          </span>
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
          <p className={darkMode ? "dark" : null} onClick={clearCompletedTasks}>
            Clear Completed
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tasks;
