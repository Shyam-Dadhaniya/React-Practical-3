import { getDay } from "../Utils/utils";

const storageGet = () => {
  return JSON.parse(localStorage.getItem("todolist"));
};
const storageChange = (newTsk, id) => {
  const localTask = storageGet();
  localTask.task = localTask.task.map((currentTask) => {
    if (currentTask.id === id) {
      return newTsk;
    } else {
      return currentTask;
    }
  });
  localStorage.setItem("todolist", JSON.stringify(localTask));
};

const storageReset = () => {
  localStorage.setItem(
    "todolist",
    JSON.stringify({
      date: getDay(),
      task: [],
    })
  );
};

const addStorage = (newTask) => {
  const list = storageGet();
  localStorage.setItem(
    "todolist",
    JSON.stringify({
      date: getDay(),
      task: [...list.task, newTask],
    })
  );
};
export { storageGet, storageChange, storageReset, addStorage };
