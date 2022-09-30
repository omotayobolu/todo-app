import React, { useContext } from "react";
import TaskContext from "./store/TaskContext";

const ExtraInfoMobile = () => {
  const {
    darkMode,
    active,
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
  } = useContext(TaskContext);
  return (
    <section
      className={
        darkMode ? "dark selected-content-mobile" : "selected-content-mobile"
      }
    >
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
    </section>
  );
};

export default ExtraInfoMobile;
