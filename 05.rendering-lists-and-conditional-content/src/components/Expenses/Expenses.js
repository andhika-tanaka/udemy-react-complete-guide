import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYearFilter, setYearFilter] = useState("");

  const selectedYearHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredExpense = props.items.filter(
    (filteredExpense) =>
      filteredExpense.date.getFullYear().toString() === selectedYearFilter
  );



  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onSelectedYear={selectedYearHandler}
          setYear={selectedYearFilter}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
