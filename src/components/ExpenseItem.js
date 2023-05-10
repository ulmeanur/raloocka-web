import "./ExpenseItem.css"

function ExpenseItem(props) {
	//props is an object that stores the data that it's passed to the component from another one 
	// it makes the component reusable
	return (
		<div className="expense-item">
			<div>{props.expenseDate}</div>
			<div className="expense-item__description">
				<h2>{props.expenseTitle}</h2>
				<div className="expense-item__price">{props.expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
