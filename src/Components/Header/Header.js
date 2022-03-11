import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderDay from "./HeaderDay";
import HeaderStyle from "../../styled/headerStyle";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HeaderDate />
        <HeaderDay />
      </HeaderStyle>
    </>
  );
};

export default Header;
