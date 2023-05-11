import ExpenseItem from "../ExpenseItem/ExpenseItem";

function ExpenseItemsList() {
  return (
    <div className="expenses-container">
      <h2 className="expense-container--title">My Expenses</h2>
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}
export default ExpenseItemsList;
