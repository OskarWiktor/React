import {useState} from "react";
import ModalInput from "../../01-atoms/inputs/modal-input/ModalInput";
import ModalWindow from "../ModalWindow/ModalWindow";
import SaveButton from "../../01-atoms/buttons/save-button/SaveButton";
import CloseButton from "../../01-atoms/buttons/close-button/CloseButton";

function AddNewExpense({onSave, onCancel}) {
  const [title, setTitle] = useState("");
  const [money, setMoney] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMoneyChange = (e) => {
    setMoney(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSaveClick = () => {
    const newExpense = {
      id: Math.random().toString(),
      title,
      money,
      date: new Date(date),
    };

    onSave(newExpense);
    setTitle("");
    setMoney("");
    setDate("");
  };

  return (
    <ModalWindow>
      <CloseButton onClick={onCancel} />
      <h3>Add New Expense</h3>
      <label>
        Title:
        <ModalInput
          type="text"
          maxLength="18"
          value={title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        Money:
        <ModalInput
          type="number"
          pattern="[0-9]*"
          maxLength="6"
          value={money}
          onChange={handleMoneyChange}
        />
      </label>
      <label>
        Date:
        <ModalInput type="date" value={date} onChange={handleDateChange} />
      </label>
      <div>
        <SaveButton onClick={handleSaveClick}>Save</SaveButton>
      </div>
    </ModalWindow>
  );
}

export default AddNewExpense;
