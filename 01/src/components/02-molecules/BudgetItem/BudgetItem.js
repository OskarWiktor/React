import {useState} from "react";
import {ReactComponent as AirplaneTilt} from "../../../assets/budget-icons/airplane-tilt.svg";

import EditButton from "../../01-atoms/buttons/edit-button/EditButton";
import DeleteButton from "../../01-atoms/buttons/delete-button/DeleteButton";
import SaveButton from "../../01-atoms/buttons/save-button/SaveButton";
import CloseButton from "../../01-atoms/buttons/close-button/CloseButton";

import ModalInput from "../../01-atoms/inputs/modal-input/ModalInput";
import ModalWindow from "../ModalWindow/ModalWindow";

function BudgetItem(props) {
  //budget data
  const [budgetTitle, setBudgetTitle] = useState(props.title);
  const [budgetMoney, setBudgetMoney] = useState(props.money);
  // modal window
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };
  const handleSaveClick = () => {
    setIsModalOpen(false);
  };

  //change value
  const handleBudgetMoneyChange = (e) => {
    setBudgetMoney(e.target.value);
  };

  const handleBudgetTitleChange = (e) => {
    setBudgetTitle(e.target.value);
  };
  return (
    <article className="budget-item--container">
      <AirplaneTilt className="budget-item--icon" />
      <div className="budget-items">
        <div className="budget-items--left">
          <h3 className="budget-title">{budgetTitle}</h3>
          <EditButton onClick={handleEditClick} />
        </div>
        <div className="budget-items--right">
          <p className="budget-money">{budgetMoney} zł</p>
          <DeleteButton />
        </div>
      </div>
      {isModalOpen && (
        <ModalWindow>
          <CloseButton onClick={() => setIsModalOpen(false)}/>
          <h3>Edit <span>{budgetTitle}</span></h3>

          <label>
            Title:
            <ModalInput
              type="text"
              maxLength="10"
              value={budgetTitle}
              onChange={handleBudgetTitleChange}
            />
          </label>

          <label>
            Budget Amount:
            <ModalInput
              type="number"
              pattern="[0-9]*"
              maxLength="6"
              value={budgetMoney}
              onChange={handleBudgetMoneyChange}
            />
          </label>
          <SaveButton onClick={handleSaveClick} />
        </ModalWindow>
      )}
    </article>
  );
}

export default BudgetItem;
