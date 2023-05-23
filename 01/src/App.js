import AnalistCircle from "./components/03-organisms/AnalystCircle/AnalystCircle";
import Header from "./components/03-organisms/Header/Header";
import BudgetMenager from "./components/03-organisms/BudgetMenager/BudgetMenager";
import ExpenseItemsList from "./components/03-organisms/ExpenseItemsList/ExpenseItemsList";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="left-column">
        <ExpenseItemsList />
      </main>
      <aside className="right-column">
        <AnalistCircle />
        <BudgetMenager />
      </aside>
    </div>
  );
}

export default App;
