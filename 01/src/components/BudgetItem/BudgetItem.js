import { ReactComponent as AirplaneTilt } from "../../assets/budget-icons/airplane-tilt.svg";

function BudgetItem() {
const budgetTitle = "Title";

  return (
    <div className="budget-item">
      <AirplaneTilt className="budget-item--icon" />
      <div className="budget-item--text">
        <h3 className="budget-text--title">nazwa</h3>
        <p className="budget-text--money">kasa $</p>
      </div>
      <div className="budget-edit"><button className="budget-edit--button">...</button></div>
    </div>
  );
}

export default BudgetItem;