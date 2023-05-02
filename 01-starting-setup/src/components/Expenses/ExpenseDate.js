import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();
  //
  // another way of outputting the dates could be setting  a date object and passign it like th below code
  /*
    const dateObject = {
    month: props.date.toLocaleString("en-us", { month: "long" }),
    day: props.date.toLocaleString("en-us", { day: "2-digit" }),
    year: props.date.getFullYear(),
  };
  */
  // then accessing it using the code sample below
  // <div>{dateObject.month}</div>
  // <div>{dateObject.day}</div>
  // <div>{dateObject.year}</div>
  // it'll still give thesame result.
  //
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-year">{year}</div>
      <div className="expense-day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
