import ToDoTask from "./ToDoTask";
import ToDoListStyle from "../../styled/ToDo/listStyle";
import NotaskStyle from "../../styled/ToDo/NotaskStyle";

const ToDoList = (props) => {
  return (
    <ToDoListStyle>
      {props.data.length > 0 ? props.data.map((dummy) => (
        <ToDoTask
          setTask={props.setTask}
          key={dummy.id}
          id={dummy.id}
          data={dummy.data}
          isChecked={dummy.isChecked}
        />
      )) : <NotaskStyle>No Task </NotaskStyle>}
    </ToDoListStyle>
  );
};

export default ToDoList;
