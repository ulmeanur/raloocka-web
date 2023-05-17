import React, {useState} from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const selectedYearValueHandler = (event) => {
        event.preventDefault();
        const selectedYearValue = event.target.value;
        props.onChangeYear(selectedYearValue);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectedYearValueHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2019'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;