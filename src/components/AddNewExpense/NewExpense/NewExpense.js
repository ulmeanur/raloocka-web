import './NewExpense.css'
import React, {useState} from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
    const enteredExpenseDataHandler = (enteredExpenseData) => {
        const expenseData= {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        console.log(expenseData);

        props.onAddExpense(expenseData);
        
    }

    let [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
           {isEditing && <ExpenseForm onStopEditingHandler={stopEditingHandler} onSaveExpenseData={enteredExpenseDataHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpense;