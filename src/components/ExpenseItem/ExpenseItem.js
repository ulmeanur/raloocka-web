import React from 'react';
import "./ExpenseItem.css"
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../UI/Card/Card';

const ExpenseItem = (props) => {
	//props is an object that stores the data that it's passed to the component from another one 
	// it makes the component reusable

	return (
		<Card className="expense-item">
			<ExpenseDate expenseFullDate={props.expenseDate} ></ExpenseDate> 
			<div className="expense-item__description">
				<h2>{props.expenseTitle}</h2>
				<div className="expense-item__price">{props.expenseAmount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
