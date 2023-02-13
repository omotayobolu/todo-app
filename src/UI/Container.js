import React, { useContext } from "react";
import TaskContext from "../components/store/TaskContext";

const Container = (props) => {
  const { darkMode } = useContext(TaskContext);
  return <div className={darkMode ? "dark App" : "App"}>{props.children}</div>;
};

export default Container;
