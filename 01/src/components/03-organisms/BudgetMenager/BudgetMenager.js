import AddButton from "../../01-atoms/buttons/add-button/AddButton";
import BudgetItem from "../../02-molecules/BudgetItem/BudgetItem";

function BudgetMenager() {
  return (
    <section className="budget-container">
      <header className="budget-container--header">
        <h2 className="budget-container--title">Budget Menager</h2>

        <AddButton>Add Budget</AddButton>
      </header>

      <BudgetItem />
      <BudgetItem />
      <BudgetItem />
    </section>
  );
}
export default BudgetMenager;
