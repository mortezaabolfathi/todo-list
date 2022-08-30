import React from 'react';

const Todo = ({todo,onCompleted, onDeleteTodo, onEditTodo}) => {
 
       return (
        <>
          <div style={{background:"#12c3"}}> 
            <h3>{todo.Text}</h3>
            <h5 onClick={onCompleted} style={{border:"2px solid"}}>{todo.isCompleted ? "Done" : "not Done"}</h5>
            <button onClick={onEditTodo}>Edit</button>
            <button onClick={onDeleteTodo}>delete</button>
          </div>
        </>
      );
}
 
export default Todo;