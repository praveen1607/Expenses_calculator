import React , {useState} from 'react';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear]=useState('2022');
  const onChangeFilterHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={onChangeFilterHandler} 
      />
      <ExpensesChart expense={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
    </li>
  );
}
export default Expenses;