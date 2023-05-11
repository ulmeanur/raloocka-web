import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {

  const expenses = [
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

  return (
    <div className="App">
      <header className="App-header">
        <p>raloocka-web git repository</p>
      </header>
      <h2>Expence tracker</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
