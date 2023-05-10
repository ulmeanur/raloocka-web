import "./ExpenseItem.css"

function ExpenseItem(props) {
	//props is an object that stores the data that it's passed to the component from another one 
	// it makes the component reusable
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const fullDate = props.expenseDate.toLocaleDateString('en-US', options);

	return (
		<div className="expense-item">
			<div>
				{fullDate}
			</div>
			<div className="expense-item__description">
				<h2>{props.expenseTitle}</h2>
				<div className="expense-item__price">{props.expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
