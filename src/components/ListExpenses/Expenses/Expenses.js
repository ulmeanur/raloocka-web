import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../../UI/Card/Card';

// Created a new component that is responsible for displaying expenses
// Added multiple ExpenseItem components in the component
// Keet the expenses data in the App component and passed that data into the newly created component
const Expenses = (props) =>  {

    const expensesData = props.expenses;
	
	const [filteredExpenseYear, setFilteredExpenseYear] = useState("2019");

	const onChangeYearHandler = (passedYearValue) => {
        setFilteredExpenseYear(passedYearValue);
    }

	console.log("Expenses.js expenseYear=", filteredExpenseYear);

	return (
			
		<Card className='expenses'>
			<ExpensesFilter selected={filteredExpenseYear} onChangeYear={onChangeYearHandler} />

			{
			/* render dinamically each expense using map()
			map() will receive the array item as a parameter and a function that will be applied on each array element
			*/
			expensesData.map(expense => 
				<ExpenseItem
					expenseDate={expense.date}
					expenseTitle={expense.title}
					expenseAmount={expense.amount}>
				</ExpenseItem>
			)}
		</Card>
	);
}

export default Expenses;
