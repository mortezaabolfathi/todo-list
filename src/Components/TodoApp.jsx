import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
const TodoApp = () => {

    const [todoS,setTodoS]=useState([]);

    const addTodoHandler=(inputText)=>{
        const newTodo={id:Math.floor(Math.random()*100), Text:inputText, isCompleted:false}
        setTodoS([...todoS,newTodo])
    }
    
    const completedHandler=(enterId)=>{
        const cloneTodoS=[...todoS];
        const selectedCompleted=cloneTodoS.filter((T)=>T.id===enterId)
        selectedCompleted[0].isCompleted=!selectedCompleted[0].isCompleted;
        setTodoS(cloneTodoS)
        console.log(todoS);
    }
    return ( 
        <div>
            <TodoForm addTodoHandler={addTodoHandler}/>
            <TodoList todoS={todoS} onCompleted={completedHandler}/>
        </div>
     );
}
 
export default TodoApp;