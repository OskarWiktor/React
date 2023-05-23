import ExpenseItem from "../../02-molecules/ExpenseItem/ExpenseItem";
import AddButton from "../../01-atoms/buttons/add-button/AddButton";

function ExpenseItemsList() {
  return (
    <section className="expenses-container">
      <header className="expenses-header">
        <h2 className="expenses-header--title">My Expenses</h2>
        <AddButton>Add New Expense</AddButton>
      </header>
      <ExpenseItem />
      <ExpenseItem />
    </section>
  );
}
export default ExpenseItemsList;
