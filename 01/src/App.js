import React, { useState } from "react";

import Header from "./components/Header/Header";
import AddButton from "./components/AddButton/AddButton";
import AnalistCircle from "./components/AnalystCircle/AnalystCircle";
import BudgetMenager from "./components/BudgetMenager/BudgetMenager";
import ExpenseItemsList from "./components/ExpenseItemsList/ExpenseItemsList";

function App() {
  return (
    <div className="container">
      <Header></Header>

      <div className="left-column">
        <AddButton />
        <ExpenseItemsList />
      </div>

      <div className="right-column">
        <AnalistCircle></AnalistCircle>
        <BudgetMenager></BudgetMenager>
        <div className="budget"></div>
      </div>
    </div>
  );
}

export default App;
