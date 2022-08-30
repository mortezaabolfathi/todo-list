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
          // <Todo
          //   todo={item}
          //   key={item.id}
          //   onCompleted={() => props.onCompleted(item.id)}
          //   onDeleteTodo={() => props.onDeleteTodo(item.id)}
          //   onEditTodo={() => setEdit(item)}
          // />

          //I came here instead of passing the component, I wrote here 
          
          <div style={{background:"#12c3"}} key={item.TodoList}> 
            <h3>{item.Text}</h3>
            <h5 onClick={()=>props.onCompleted(item.id)} style={{border:"2px solid"}}>{item.isCompleted ? "Done" : "not Done"}</h5>
            <button onClick={() => setEdit(item)}>Edit</button>
            <button onClick={() => props.onDeleteTodo(item.id)}>delete</button>
          </div>
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
