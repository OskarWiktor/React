import { ReactComponent as CreditCard } from "../../assets/budget-icons/credit-card.svg";
import { ReactComponent as Coins } from "../../assets/budget-icons/coins.svg";

import BudgetItem from "../BudgetItem/BudgetItem";
function BudgetMenager() {
  return (
    <section className="budget-container">
      <div className="budget-container--header">
        <h2 className="budget-container--title">Budget Menager</h2>
        <div className="budget-add-button">
          <p className="budget-add-button--text">Add Budget</p>
        </div>
      </div>

      <BudgetItem />
      <BudgetItem />
      <BudgetItem />

    </section>
  );
}
export default BudgetMenager;
