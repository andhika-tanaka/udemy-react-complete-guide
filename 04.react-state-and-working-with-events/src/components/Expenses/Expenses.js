import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [selectedYearFilter,setYearFilter] = useState('2022');

  const selectedYearHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter onSelectedYear={selectedYearHandler} setYear={selectedYearFilter}/>
        {props.items.map((item, index) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={index}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
