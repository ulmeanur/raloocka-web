import React from 'react';
import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = (props) => {
    const filteredExpensesData = props.expensesData;


	if(filteredExpensesData.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found.</h2>
	}

    /* render dinamically each expense using map()
        map() will receive the array item as a parameter and a function that will be applied on each array element
        */
    return (
        <ul className="expenses-list">
            {filteredExpensesData.map(expense => 
            <ExpenseItem
                key={expense.id}
                expenseDate={expense.date}
                expenseTitle={expense.title}
                expenseAmount={expense.amount}>
            </ExpenseItem>
            )}
        </ul>
    );
};

export default ExpensesList;