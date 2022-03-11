import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderDay from "./HeaderDay";
import HeaderStyle from "../../styled/headerStyle";

const HeaderMain = () => {
  return (
    <>
      <HeaderStyle>
        <HeaderDate />
        <HeaderDay />
      </HeaderStyle>
    </>
  );
};

export default HeaderMain;
