import React from "react";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  // fetch("https://todo-app-5964a-default-rtdb.firebaseio.com/");

  return (
    <div className="App">
      <Header />
      <AddItem />
      <Tasks />
    </div>
  );
}
