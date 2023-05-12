// useState is a React hook
//useState always returns an array with 2 values
//where the first value is the value(variable) itself
//and the second value is the updating function that sets the new value
import React, {useState} from 'react';
import "./ExpenseItem.css"
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../UI/Card/Card';

const ExpenseItem = (props) => {
	//props is an object that stores the data that it's passed to the component from another one 
	// it makes the component reusable

	// we are using array desctructuring to store both elements from useState in separate variables or constants as above
	const [title, setTitle] = useState(props.expenseTitle);
	
	const clickHandler = () => {
		setTitle("Updated !");
		console.log(title);
		
	}

	return (
		<Card className="expense-item">
			<ExpenseDate expenseFullDate={props.expenseDate} ></ExpenseDate> 
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.expenseAmount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
