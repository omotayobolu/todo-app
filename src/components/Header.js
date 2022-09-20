import React from "react";
import Moon from "../assets/icon-moon.svg";

const Header = () => {
  return (
    <header>
      <h1>todo</h1>
      <img src={Moon} alt="moon" />
    </header>
  );
};

export default Header;
