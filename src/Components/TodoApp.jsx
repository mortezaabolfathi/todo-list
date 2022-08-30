import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
const TodoApp = () => {

    const [todoS,setTodoS]=useState([]);

    const addTodo=(inputText)=>{
        const newTodo={id:Math.floor(Math.random()*100), Text:inputText, isCompleted:false}
        setTodoS([...todoS,newTodo])
    }
    
    const completedHandler=(enterId)=>{
        const cloneTodoS=[...todoS];
        const selectedCompleted=cloneTodoS.filter((T)=>T.id===enterId)
        selectedCompleted[0].isCompleted=!selectedCompleted[0].isCompleted;
        setTodoS(cloneTodoS)
    }

    const onRemoveTodo=(enterId)=>{
        const cloneTodoS=[...todoS];
        const selectedTodoSRemove=cloneTodoS.filter((T)=>T.id!==enterId);
        setTodoS(selectedTodoSRemove);
    }

    const updateTodo=(enterId , newValue)=>{
        const cloneTodoS=[...todoS];
        const selectedCompleted=cloneTodoS.filter((T)=>T.id===enterId)
        selectedCompleted[0].Text=newValue;
        setTodoS(cloneTodoS);
    }

    
    return ( 
        <div>
            <TodoForm submitTodo={addTodo}/>
            <TodoList
             todoS={todoS} 
             onCompleted={completedHandler} 
             onDeleteTodo={onRemoveTodo}    
             onUpdateTodo={updateTodo}
             />
        </div>
     );
}
 
export default TodoApp;