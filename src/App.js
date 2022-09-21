import React, { useState, useCallback, useEffect } from "react";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://todo-app-5964a-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasksHandler();
  }, [fetchTasksHandler]);

  async function AddTaskHandler(task) {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, checked: false, task };
    const listTasks = { ...tasks, myNewTask };
    setTasks(listTasks);

    const response = await fetch(
      "https://todo-app-5964a-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setTasks(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    AddTaskHandler(newTask);
    setNewTask(newTask);
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newTask={newTask}
        setNewTask={setNewTask}
        onSubmitTask={handleSubmit}
      />
      <main className="main-tasks">
        {isLoading && <p className="default-text">Loading tasks...</p>}
        {error && <p className="default-text">{error}</p>}
        {!isLoading && !error && <Tasks tasks={tasks} />}
      </main>
    </div>
  );
}
