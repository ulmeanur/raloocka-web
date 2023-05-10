import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { 
      id: "e1", 
      date: "April 19th 2022", 
      title: "Hospital Maternity Expence", 
      amount: "2500$" 
    },
    { 
      id: "e2", 
      date: "April 10th 2022", 
      title: "Car Insurance", 
      amount: "505$"
    },
    {
      id: "e3", 
      date: "April 11th 2022", 
      title: "New TV", 
      amount: "1000$" 
    },
    { 
      id: "e4", 
      date: "April 12th 2022", 
      title: "New Desk(Wooden)", 
      amount: "250$" 
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>raloocka-web git repository</p>
      </header>
      <h2>Expence tracker</h2>
      <ExpenseItem 
        expenseDate= {expenses[0].date}
        expenseTitle={expenses[0].title} 
        expenseAmount = {expenses[0].amount}>
      </ExpenseItem>
      <ExpenseItem 
        expenseDate= {expenses[1].date}
        expenseTitle={expenses[1].title} 
        expenseAmount = {expenses[1].amount}>
      </ExpenseItem>
      <ExpenseItem 
        expenseDate= {expenses[2].date}
        expenseTitle={expenses[2].title} 
        expenseAmount = {expenses[2].amount}>2
      </ExpenseItem>
      <ExpenseItem 
        expenseDate= {expenses[3].date}
        expenseTitle={expenses[3].title} 
        expenseAmount = {expenses[3].amount}>
      </ExpenseItem>
    </div>
  );
}

export default App;
