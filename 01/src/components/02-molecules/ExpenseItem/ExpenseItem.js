import {useState} from "react";
import {ReactComponent as Taxi} from "../../../assets/expence-item-icons/taxi.svg";
import EditButton from "../../01-atoms/buttons/edit-button/EditButton";
import DeleteButton from "../../01-atoms/buttons/delete-button/DeleteButton";

function ExpenseItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseTitle, setExpenseTitle] = useState("Title");
  const [expenseMoney, setExpenseMoney] = useState(400);
  const [expenseDate, setExpenseDate] = useState(new Date());
  const expenseBudget = "Podróże";
  const [formattedDate, setFormattedDate] = useState(
    expenseDate.toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleExpenseTitleChange = (e) => {
    setExpenseTitle(e.target.value);
  };

  const handleExpenseMoneyChange = (e) => {
    setExpenseMoney(e.target.value);
  };

  const handleExpenseDateChange = (e) => {
    setExpenseDate(new Date(e.target.value));
  };

  const handleSaveClick = () => {
    setFormattedDate(
      expenseDate.toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    setIsModalOpen(false);
  };
  return (
    <article className="expense-item">
      <div className="expense-item--left-items">
        <Taxi className="expense-item--icon" />
        <div className="expense-text--container">
          <div className="expense-text">
            <h3 className="expense-text--title">{expenseTitle}</h3>
            <time className="expense-text--data">{formattedDate}</time>
            <EditButton onClick={handleEditClick} />
          </div>

          <div className="expense-budget">
            <p className="expense-budget--text">{expenseBudget}</p>
          </div>
        </div>
      </div>

      <div className="expense-item--right-items">
        <p className="expense-item--money">{expenseMoney} zł</p>
        <DeleteButton />
      </div>
      {isModalOpen && (
        <section className="edit-expense-modal">
          <div className="edit-expense-modal--container">
            <h3 className="edit-expense-modal--title">
              Edit <span>{expenseTitle}</span>
            </h3>
            <label className="edit-expense-modal--label">
              Title:
              <input
                className="edit-expense-modal--input"
                type="text"
                maxLength="18"
                value={expenseTitle}
                onChange={handleExpenseTitleChange}
              />
            </label>
            <label className="edit-expense-modal--label">
              Money:
              <input
                className="edit-expense-modal--input"
                type="text"
                pattern="[0-9]*"
                maxLength="6"
                value={expenseMoney}
                onChange={handleExpenseMoneyChange}
              />
            </label>
            <label className="edit-expense-modal--label">
              Data:
              <input
                className="edit-expense-modal--input"
                type="date"
                value={expenseDate}
                onChange={handleExpenseDateChange}
              />
            </label>
            <button
              className="edit-expense-modal--save"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </div>
        </section>
      )}
    </article>
  );
}

export default ExpenseItem;
