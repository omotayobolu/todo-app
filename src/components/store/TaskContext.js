import { useState, useEffect, createContext } from "react";

const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("taskstodo")) || []
  );
  const [darkMode, setDarkMode] = useState("");
  const [active, setActive] = useState("type1");
  const [newTask, setNewTask] = useState("");

  const toggleActive = (id) => {
    setActive(id);
  };

  const ModeToggler = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("taskstodo", JSON.stringify(tasks));
  }, [tasks]);

  const showAllTasks = () => {
    setTasks(tasks);
    toggleActive("type1");
  };

  const showActiveTasks = () => {
    const taskLists = tasks.filter((task) => !task.checked);
    setTasks(taskLists);
    toggleActive("type2");
  };

  const showCompletedTasks = () => {
    const taskLists = tasks.filter((task) => task.checked);
    setTasks(taskLists);
    toggleActive("type3");
  };

  const AddTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, checked: false, task };
    const tasksList = [...tasks, myNewTask];
    setTasks(tasksList);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (!newTask) return;
    AddTask(newTask);
    setNewTask("");
  };

  const clearCompletedTasks = () => {
    const taskLists = tasks.filter((task) => !task.checked);
    setTasks(taskLists);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reordereditem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordereditem);

    setTasks(items);
  }

  const handleDeleteTask = (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    setTasks(taskList);
  };

  const handleCompletedTask = (id) => {
    const taskList = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(taskList);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        darkMode,
        setDarkMode,
        active,
        setActive,
        newTask,
        setNewTask,
        toggleActive,
        ModeToggler,
        showAllTasks,
        showActiveTasks,
        showCompletedTasks,
        AddTask,
        handleSubmitTask,
        clearCompletedTasks,
        handleOnDragEnd,
        handleDeleteTask,
        handleCompletedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
