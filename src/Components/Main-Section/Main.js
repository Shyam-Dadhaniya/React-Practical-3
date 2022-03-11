import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ToDoList from "../ToDo-Section/ToDoList";
import MainStyle from "../../styled/mainStyle";
import { getDay } from "../../Utils/utils";
import { useState, useEffect } from "react";
import { addStorage,storageGet, storageReset } from "../../service/localStorage";

function Main() {
  const [task, setTask] = useState([]);
  const addHandler = (newTask) => {
    setTask((prev) => {
      return [...prev, newTask];
    });
    addStorage(newTask)
    //add task to local sorage
  };
  useEffect(() => {
    const data = storageGet();
    if (data && data.date === getDay()) {
      setTask(data.task);
    } else {
      storageReset()
    }
    // if(currentDate===date from localStorage)
    // setTask(list from local storage)
    // else
    // update local storage
    // store current date and store empty array
  }, []);

  return (
    <MainStyle>
      <Header />
      <ToDoList setTask={setTask} data={task} />
      <Footer onAdd={addHandler} />
    </MainStyle>
  );
}

export default Main;
