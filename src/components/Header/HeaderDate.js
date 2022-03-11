import React from "react";
import HeaderDateStyle from "../../styled/Date/headerDateStyle";
import MonthYear from "../../styled/Date/headerMonthYear";
import DateStyle from "../../styled/Date/dateStyle";
import MonthStyle from "../../styled/Date/monthStyle";
import YearStyle from "../../styled/Date/yearStyle";
import getDate from "../../utils/utils";
const HeaderDate = () => {
  
  return (
    <HeaderDateStyle>
      <DateStyle>{getDate("date")}</DateStyle>
      <MonthYear>
        <MonthStyle>{getDate("month")}</MonthStyle>
        <YearStyle>{getDate("year")}</YearStyle>
      </MonthYear>
    </HeaderDateStyle>
  );
};

export default HeaderDate;
