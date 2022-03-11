import React from "react";
import HeaderDayStyle from "../../styled/Day/dayStyle";
import { CurrentDay } from "../../Utils/utils";
const HeaderDay = () => {
  return <HeaderDayStyle>{CurrentDay}</HeaderDayStyle>;
};

export default HeaderDay;
