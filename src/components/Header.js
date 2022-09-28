import React from "react";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const Header = (props) => {
  return (
    <header>
      <h1>todo</h1>
      {props.darkMode ? (
        <img onClick={props.onToggleMode} src={Sun} alt="" />
      ) : (
        <img onClick={props.onToggleMode} src={Moon} alt="moon" />
      )}
    </header>
  );
};

export default Header;
