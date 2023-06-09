import React, {useState} from 'react';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
import Card from '../../UI/Card/Card';

// Created a new component that is responsible for displaying expenses
// Added multiple ExpenseItem components in the component
// Keet the expenses data in the App component and passed that data into the newly created component
const Expenses = (props) => {

    const expensesData = props.expenses;
	const [filteredExpenseYear, setFilteredExpenseYear] = useState("2019");

	const onChangeYearHandler = (passedYearValue) => {
        setFilteredExpenseYear(passedYearValue);
    }

	const filteredExpensesData = expensesData.filter(expense => {
		return (new Date(expense.date).getFullYear().toString() === filteredExpenseYear)
	});
		
	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredExpenseYear} onChangeYear={onChangeYearHandler}
			 />
			<ExpensesChart expensesData={filteredExpensesData} /> 
			<ExpensesList expensesData={filteredExpensesData} /> 
		</Card>
	);
};

export default Expenses;
