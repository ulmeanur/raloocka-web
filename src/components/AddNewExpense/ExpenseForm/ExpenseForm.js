import './ExpenseForm.css'
import React, {useState} from 'react';

const ExpenseForm = (props) => {
    // storing useState values in an object
    // const [userInput, setUserInput] = useState ({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     selectedDate: ""
    // });

    
    //using useState() for storing each value is better than using an object will all values that needs to be updated using prevState() because is more reliable
   // we are using array desctructuring to store both elements from useState in separate variables or constants as above
	
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

 
    const newExpenseSubmitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: selectedDate
            //new Date(selectedDate)
        };

        console.log(expenseDate);

        setEnteredTitle("");
        setEnteredAmount("");
        setSelectedDate("");

        console.log(expenseDate);

        props.onSaveExpenseData(expenseDate);
    }

    const titleChangeHandler = (event) => {
        // using prevState we will always use the previous updated state
        // setUserInput({
        //     ...prevState,
        //     enteredTitle: event.target.value
        // });

        console.log("event value", event.target.value);
        setEnteredTitle(event.target.value);
        console.log("enteredTitle = ", enteredTitle);

    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...prevState,
        //     enteredAmount: event.target.value
        // })
        console.log("event value", event.target.value);
        setEnteredAmount(event.target.value);
        console.log("enteredAmount = ", enteredAmount);
    }

    const dateChangeHandler = (event) => {
        // console.log(prevState);
        // setUserInput({
        //     ...prevState,
        //     selectedDate: event.target.value
        // });

        console.log("event value", event.target.value);
        setSelectedDate(event.target.value);
        console.log("selectedDate = ", selectedDate);
    }

    // TWO WAY DATA BINDING = listeting for events & sending data back to html elements(here the value of inputs)  
    // TWO WAY DATA BINDING helps gathering information and changing it, for e.g. on form submit
    return (
        <form onSubmit={newExpenseSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date  </label>
                    <input type="date" value={selectedDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;