import React, { useState } from "react";
import Todo from "./Todo";
import TodoEdit from "./TodoEdit";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
  const [edit, setEdit] = useState({id:null});


  const editTodo=(newValue)=>{
    props.onUpdateTodo(edit.id , newValue)
    setEdit("")
  }


  const renderTodoS = () => {
    return (
      <>
        {props.todoS.map((item) => (
          <Todo
            todo={item}
            key={item.id}
            onCompleted={() => props.onCompleted(item.id)}
            onDeleteTodo={() => props.onDeleteTodo(item.id)}
            onEditTodo={() => setEdit(item)}
          />
        ))}
      </>
    );
  };

  return (
    <div>
      {edit.id ?  <TodoForm submitTodo={editTodo} edit={edit}/> :   <>  {renderTodoS()} </> }  
    </div>
  );
};

export default TodoList;
