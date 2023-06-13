import {useState} from "react";
import AddButton from "../../01-atoms/buttons/add-button/AddButton";
import BudgetItem from "../../02-molecules/BudgetItem/BudgetItem";

function BudgetMenager() {
  const budgetsDummyData = [
    {
      id: "e1",
      title: "Jedzenie",
      money: "1800",
    },
    {id: "e2", title: "Dom", money: "2400"},
    {
      id: "e3",
      title: "Ubrania",
      money: "800",
    },
    {
      id: "e4",
      title: "Podróże",
      money: "900",
    },
    {
      id: "e5",
      title: "Inne",
      money: "1000",
    },
  ];

  const [budgets, setBudgets] = useState(budgetsDummyData);

  return (
    <section className="budget-container">
      <header className="budget-container--header">
        <h2 className="budget-container--title">Budget Menager</h2>

        <AddButton>Add Budget</AddButton>
      </header>
      {budgets.map((budget) => (
        <BudgetItem key={budget.id} title={budget.title} money={budget.money} />
      ))}
    </section>
  );
}
export default BudgetMenager;