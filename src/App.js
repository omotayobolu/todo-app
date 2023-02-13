import React from "react";
import AddTask from "./components/AddTask";
import ExtraInfoMobile from "./components/Extra-info-mobile";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskProvider } from "./components/store/TaskContext";
import Dragdrop from "./components/Dragdrop";
import Container from "./UI/Container";

export default function App() {
  return (
    <TaskProvider>
      <Container>
        <Header />
        <AddTask />
        <Tasks />
        <ExtraInfoMobile />
        <Dragdrop />
      </Container>
    </TaskProvider>
  );
}
