import React,{useState} from 'react';
import './NewExpense.css'

import ExpenseForm from './ExpenseForm';


const NewExpense=props =>{
    const [isEditing,SetIsEditing]=useState(false);
    const SaveExpenseData=(enteredData)=>{
        const expenseData={
            ...enteredData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        SetIsEditing(false)
    }
    const editingHandler= () =>{
        SetIsEditing(true);
    }
    const EditHandler=()=>{
        SetIsEditing(false);
    }

   
    return(
        <div className="new-expense">
            
            { isEditing ?  
            <ExpenseForm onSaveExpenseData={SaveExpenseData} onEditHandler={EditHandler}/> : 
            <button onClick={editingHandler}>Add New Expense</button>}
           
        </div>
    )
}
export default NewExpense;