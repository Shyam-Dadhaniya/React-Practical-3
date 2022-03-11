import Footer from "../components/Footer/Footer";
import HeaderMain from "../components/Header/HeaderMain";
import ToDoList from "../components/ToDo-Section/ToDoList";
import MainStyle from "../styled/mainStyle";
import getDate from "../utils/utils";
import { useState, useEffect } from "react";
import {
  addStorage,
  storageGet,
  storageReset,
} from "../service/localStorage";

function Main() {
  const [task, setTask] = useState([]);
  const addHandler = (newTask) => {
    setTask((prev) => {
      return [...prev, newTask];
    });
    addStorage(newTask);
  };
  useEffect(() => {
    const data = storageGet();
    if (data && data.date === getDate("date")) {
      setTask(data.task);
    } else {
      storageReset();
    }
  }, []);

  return (
    <MainStyle>
      <HeaderMain />
      <ToDoList setTask={setTask} data={task} />
      <Footer onAdd={addHandler} />
    </MainStyle>
  );
}

export default Main;
