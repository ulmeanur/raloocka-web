import './ExpenseForm.css'
import React, {useState} from 'react';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const titleChangeHandler = (event) => {
        console.log("event value", event.target.value);
        setEnteredTitle(event.target.value);
        console.log("enteredTitle = ", enteredTitle);
    }

    const amountChangeHandler = (event) => {
        console.log("event value", event.target.value);
        setEnteredAmount(event.target.value);
        console.log("enteredAmount = ", enteredAmount);
    }

    const dateChangeHandler = (event) => {
        console.log("event value", event.target.value);
        setSelectedDate(event.target.value);
        console.log("selectedDate = ", selectedDate);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date  </label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;