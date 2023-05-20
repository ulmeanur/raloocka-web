import React from 'react';
import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = (props) => {
    
    let expensesContent = <div className='expenses-list__fallback'><p>No expenses found.</p></div>;

    const filteredExpensesData = props.expensesData.filter(expense => {
		return (new Date(expense.date).getFullYear().toString() === props.filteredYear)
	});


	if(filteredExpensesData.length > 0) {
		/* render dinamically each expense using map()
			map() will receive the array item as a parameter and a function that will be applied on each array element
			*/
		expensesContent = (filteredExpensesData.map(expense => 
			<ExpenseItem
				key={expense.id}
				expenseDate={expense.date}
				expenseTitle={expense.title}
				expenseAmount={expense.amount}>
			</ExpenseItem>
			)
		);
	}

    return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;