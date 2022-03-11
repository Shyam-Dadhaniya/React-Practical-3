import React from "react";
import HeaderDateStyle from "../../styled/Date/headerDateStyle";
import MonthYear from "../../styled/Date/headerMonthYear";
import DateStyle from "../../styled/Date/dateStyle";
import MonthStyle from "../../styled/Date/monthStyle";
import YearStyle from "../../styled/Date/yearStyle";
import { date, month, year } from "../../Utils/utils";
const HeaderDate = () => {
  
  return (
    <HeaderDateStyle>
      <DateStyle>{date}</DateStyle>
      <MonthYear>
        <MonthStyle>{month}</MonthStyle>
        <YearStyle>{year}</YearStyle>
      </MonthYear>
    </HeaderDateStyle>
  );
};

export default HeaderDate;
