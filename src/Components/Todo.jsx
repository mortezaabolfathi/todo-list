import React from 'react';

const Todo = ({todo,onCompleted}) => {
 
       return (
        <>
          <div> 
            <h3>{todo.Text}</h3>
          </div>
          <div>
            <button>Edit</button>
            <button onClick={onCompleted}>{todo.isCompleted ? "Completed" : "Done :)"}</button>
          </div>
        </>
      );
}
 
export default Todo;