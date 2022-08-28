import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
const TodoApp = () => {

    const [todoS,setTodoS]=useState([]);

    const addTodoHandler=(inputText)=>{
        const newTodo={id:Math.floor(Math.random())*10, Text:inputText, isCompelted:false}
        setTodoS([...todoS,newTodo])
    }
    
    return ( 
        <div>
            <TodoForm addTodoHandler={addTodoHandler}/>
            <TodoList todoS={todoS}/>
        </div>
     );
}
 
export default TodoApp;