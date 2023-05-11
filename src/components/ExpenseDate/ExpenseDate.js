
import "./ExpenseDate.css"

function ExpenseDate(props) {
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	// const fullDate = props.expenseFullDate.toLocaleDateString('en-US', options);
	const day = props.expenseFullDate.toLocaleDateString('en-US', {day: '2-digit'});
	const month = props.expenseFullDate.toLocaleDateString('en-US', {month: 'long'});
	const year = props.expenseFullDate.getFullYear();

    return (
        <div className="expense-date">
            {/* <div>{fullDate}</div> */}
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;