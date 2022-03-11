import React, { Component } from "react";
import HeaderDayStyle from "../../styled/Day/dayStyle";
import getDate from "../../utils/utils";
class HeaderDay extends Component {
  render() {
    return <HeaderDayStyle>{getDate("day")}</HeaderDayStyle>;
  }
}

export default HeaderDay;
