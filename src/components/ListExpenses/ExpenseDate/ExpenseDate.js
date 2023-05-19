import React from 'react';
import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	// const fullDate = props.expenseFullDate.toLocaleDateString('en-US', options);
	const day = new Date(props.expenseFullDate).toLocaleDateString('en-US', {day: '2-digit'});
	const month = new Date(props.expenseFullDate).toLocaleDateString('en-US', {month: 'long'});
	const year = new Date(props.expenseFullDate).getFullYear();

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