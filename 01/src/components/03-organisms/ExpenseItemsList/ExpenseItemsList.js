import { useState } from "react";
import ExpenseItem from "../../02-molecules/ExpenseItem/ExpenseItem";
import AddButton from "../../01-atoms/buttons/add-button/AddButton";
import AddNewExpense from "../../02-molecules/AddNewExpense/AddNewExpense"

function ExpenseItemsList() {
  const expensesDummyData = [
    {
      id: "e1",
      title: "Zakupy spożywcze",
      money: "378",
      date: new Date(2023, 4, 19),
    },
    {id: "e2", title: "Paliwo", money: "242", date: new Date(2023, 4, 1)},
    {
      id: "e3",
      title: "Jedzenie dla kota",
      money: "79",
      date: new Date(2023, 4, 11),
    },
    {
      id: "e4",
      title: "Nowy telefon",
      money: "1200",
      date: new Date(2023, 2, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expensesDummyData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveExpense = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense,...prevExpenses ]);
    setIsModalOpen(false);
  };

  return (
    <section className="expenses-container">
      <header className="expenses-header">
        <h2 className="expenses-header--title">My Expenses</h2>
        <AddButton onClick={handleAddClick}>Add New Expense</AddButton>
      </header>

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          money={expense.money}
          date={expense.date}
        />
      ))}

      {isModalOpen && <AddNewExpense onSave={handleSaveExpense} onCancel={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default ExpenseItemsList;
