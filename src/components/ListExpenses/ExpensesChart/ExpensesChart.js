import React from 'react';
import Chart from '../../Chart/Chart/Chart';
import './ExpensesChart.css';

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0}
    ];

    for (const expense of props.expensesData) {
    // we need to use FOR  OF loop instead of FOR IN as we have an array not an object
    console.log("expense.date=", expense.date);
       const expenseMonth = expense.date.getMonth(); // starting at 0 (index), so January => 0
        //const expenseMonth = expense.date.toLocaleDateString('en-US', {month: 'short'});
        console.log("expenseMonth=", expenseMonth);
       chartDataPoints[expenseMonth].value += expense.amount;
    }
	return  <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;