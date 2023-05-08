import "./ExpenseItem.css"

function ExpenseItem() {
	const expenceDate = "April 19th 2022";
	const expenceTitle = "Hospital Maternity Expence" ;
	const expenceAmount = "2505 $";

	return (
		<div className="expense-item">
			<div>{expenceDate}</div>
			<div className="expense-item__description">
				<h2>{expenceTitle}</h2>
				<div className="expense-item__price">{expenceAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
