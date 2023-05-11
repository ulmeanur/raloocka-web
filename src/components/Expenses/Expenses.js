import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../Card/Card';

// Created a new component that is responsible for displaying expenses
// Added multiple ExpenseItem components in the component
// Keet the expenses data in the App component and passed that data into the newly created component

function Expenses(props) {
    const expensesData = props.expenses;
	return (
		<Card className='expenses'>
			<ExpenseItem
				expenseDate={expensesData[0].date}
				expenseTitle={expensesData[0].title}
				expenseAmount={expensesData[0].amount}
			></ExpenseItem>
			<ExpenseItem
				expenseDate={expensesData[1].date}
				expenseTitle={expensesData[1].title}
				expenseAmount={expensesData[1].amount}
			></ExpenseItem>
			<ExpenseItem
				expenseDate={expensesData[2].date}
				expenseTitle={expensesData[2].title}
				expenseAmount={expensesData[2].amount}
			>
			</ExpenseItem>
			<ExpenseItem
				expenseDate={expensesData[3].date}
				expenseTitle={expensesData[3].title}
				expenseAmount={expensesData[3].amount}
			></ExpenseItem>
		</Card>
	);
}

export default Expenses;
