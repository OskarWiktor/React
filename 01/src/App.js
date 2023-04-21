import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="container">

      <div className="expense-item-list-container">
        <ExpenseItem></ExpenseItem>
      </div>
      <div className="analist-container">
        <div className="add-new"></div>
        <div className="analist"></div>
        <div className="budget"></div>
      </div>
    </div>
  );
}

export default App;
