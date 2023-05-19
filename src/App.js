import React, {useState} from 'react'; //React component is responsible for interpreting jsx code. 
//The React import isn't necessary to be added as it will be added automatically by the newer React versions
import './App.css';
import Expenses from './components/ListExpenses/Expenses/Expenses';
import NewExpense from './components/AddNewExpense/NewExpense/NewExpense';

const App = () => {

 //DUMMY_EXPENSES
 
  const DUMMY_EXPENSES = [
    { 
      id: "e1", 
      date: new Date('April 19, 2022'), 
      title: "Hospital Maternity Expence", 
      amount: "2500$" 
    },
    { 
      id: "e2", 
      date: new Date('April 10, 2022'), 
      title: "Car Insurance", 
      amount: "505$"
    },
    {
      id: "e3", 
      date: new Date('April 11, 2022'), 
      title: "New TV", 
      amount: "1000$" 
    },
    { 
      id: "e4", 
      date: new Date('April 12, 2022'), 
      title: "New Desk(Wooden)", 
      amount: "250$" 
    }
  ];
  
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseAdded) => {
    console.log("In App.js");
    console.log("expenseAdded = ", expenseAdded);
    setExpensesData(prevExpensesData => [expenseAdded, ...prevExpensesData]);
  };
  console.log("ExpensesData = ", expensesData);

  return (
    <div className="App">
      <header className="App-header">
        <p>raloocka-web git repository</p>
      </header>
      <h2>Expence tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expensesData} />
    </div>
  );
}

export default App;
