import React from "react";
// import Check from "../assets/icon-check.svg";
// import Cancel from "../assets/icon-cross.svg";

const AddItem = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="add-item">
      <input type="text" placeholder="Create a new todo.." />
      <button></button>
    </form>
  );
};

export default AddItem;
