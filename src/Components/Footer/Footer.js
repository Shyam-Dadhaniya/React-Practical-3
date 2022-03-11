import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import ButtonClick from "../../styled/Footer/footerStyle";
import Input from "../../styled/Footer/Input";

const Footer = (props) => {
  const [showInput, setInput] = useState(false);
  const [enterInput, setEnterInput] = useState("");
  const startAddHandler = () => {
    setInput(true);
  };
  const changeHandler = (event) => {
    setEnterInput(event.target.value);
  };

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      if (enterInput.trim().length === 0) {
        alert("Please Enter Some Text");
        return;
      }
      props.onAdd({
        id: Math.random().toString(),
        data: enterInput,
        isChecked: false,
      });
      setEnterInput("");
      setInput(false);
      return;
    }
    if (event.keyCode === 27) {
      setInput(false);
    }
  };

  return (
    <>
      {showInput && (
        <Input
          placeholder="Enter Task Hear"
          onKeyUp={enterHandler}
          value={enterInput}
          onChange={changeHandler}
          type={"text"}
        />
      )}
      {!showInput && (
        <ButtonClick onClick={startAddHandler}>
          <FiPlus />
        </ButtonClick>
      )}
    </>
  );
};
export default Footer;
