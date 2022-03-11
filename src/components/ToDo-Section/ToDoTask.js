import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import ToDOTaskStyle, { TodotaskTitle } from "../../styled/ToDo/taskStyle";
import { storageChange } from "../../service/localStorage";

const ToDoTask = (props) => {
  const completedHandler = () => {
    // setisCompeleted(!isCompleted);
    //update task in local storage
    const newTsk = {
      id: props.id,
      data: props.data,
      isChecked: !props.isChecked,
    };
    storageChange(newTsk, props.id);
    props.setTask((prev) => {
      return prev.map((dummy) => {
        if (dummy.id === props.id) {
          return {
            ...dummy,
            isChecked: !dummy.isChecked,
          };
        }
        return dummy;
      });
    });
  };
  return (
    <ToDOTaskStyle>
      <TodotaskTitle completed={props.isChecked}>{props.data}</TodotaskTitle>
      <div onClick={completedHandler}>
        {props.isChecked ? (
          <FaRegCheckCircle style={{ color: "#51e4a6" }} />
        ) : (
          <FaRegCircle />
        )}
      </div>
    </ToDOTaskStyle>
  );
};

export default ToDoTask;
