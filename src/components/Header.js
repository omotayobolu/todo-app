import React, { useContext } from "react";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

import TaskContext from "./store/TaskContext";

const Header = () => {
  const { darkMode, onToggleMode } = useContext(TaskContext);
  return (
    <header>
      <h1>todo</h1>
      {darkMode ? (
        <img onClick={onToggleMode} src={Sun} alt="" />
      ) : (
        <img onClick={onToggleMode} src={Moon} alt="moon" />
      )}
    </header>
  );
};

export default Header;
