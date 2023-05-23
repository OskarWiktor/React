import {ReactComponent as AirplaneTilt} from "../../../assets/budget-icons/airplane-tilt.svg";
import EditButton from "../../01-atoms/buttons/edit-button/EditButton";
import DeleteButton from "../../01-atoms/buttons/delete-button/DeleteButton";
function BudgetItem() {
  const budgetTitle = "Title";
  const budgetMoney = 400;

  return (
    <article className="budget-item--container">
      <AirplaneTilt className="budget-item--icon" />
      <div className="budget-items">
        <div className="budget-items--left">
          <h3 className="budget-title">{budgetTitle}</h3>
          <EditButton />
        </div>
        <div className="budget-items--right">
          <p className="budget-money">{budgetMoney} zł</p>
          <DeleteButton />
        </div>
      </div>
    </article>
  );
}

export default BudgetItem;
