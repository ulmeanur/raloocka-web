import "./ExpenseItem.css"

function ExpenseItem(props) {
	//props is an object that stores the data that it's passed to the component from another one 
	// it makes the component reusable
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const fullDate = props.expenseDate.toLocaleDateString('en-US', options);
	const day = props.expenseDate.toLocaleDateString('en-US', {day: '2-digit'});
	const month = props.expenseDate.toLocaleDateString('en-US', {month: 'long'});
	const year = props.expenseDate.getFullYear();

	return (
		<div className="expense-item">
			<div>
				<div>{fullDate}</div>
				<div>{day}</div>
				<div>{month}</div>
				<div>{year}</div>

			</div>
			<div className="expense-item__description">
				<h2>{props.expenseTitle}</h2>
				<div className="expense-item__price">{props.expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
