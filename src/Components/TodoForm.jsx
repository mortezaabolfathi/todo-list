import React, { useState } from 'react';

const TodoForm = (props) => {
    const [inputText,setInputText]=useState()

    const changeHandler=(e)=>{
        setInputText(e.target.value)
    }

    const submithandeler=(e)=>{
        e.preventDefault();
        if(!inputText){
            alert("enter your todo");
            return;
        }
        props.addTodoHandler(inputText)
        setInputText("")
    }

    return ( 
        <form action="" onSubmit={submithandeler}>
            <input type="text"  value={inputText}  onChange={(e)=>changeHandler(e)}/>
            <button type='submit' > ADD </button>
        </form>
     );
}
 
export default TodoForm;