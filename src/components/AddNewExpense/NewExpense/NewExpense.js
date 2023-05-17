import './NewExpense.css'
import React from 'react';
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
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={enteredExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;