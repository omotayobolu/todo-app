import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasksHandler = async () => {
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

      const loadedTasks = [];

      for (const key in data) {
        loadedTasks.push({
          id: key,
          task: data[key].task,
        });
      }

      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  const AddTaskHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  let content = <p className="default-text">No tasks found</p>;

  if (tasks.length > 0) {
    content = <Tasks tasks={tasks} />;
  }

  if (isLoading) {
    content = <p className="default-text">Loading tasks...</p>;
  }

  if (error) {
    content = <p className="default-text">{error}</p>;
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAddTask={AddTaskHandler} setTasks={setTasks} />
      <main className="main-tasks">{content}</main>
    </div>
  );
}

/* {isLoading && <p className="default-text">Loading tasks...</p>}
        {error && <p className="default-text">{error}</p>}
        {!isLoading && !error && <Tasks tasks={tasks} />} */
