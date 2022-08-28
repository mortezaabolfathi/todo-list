import React from 'react';

const Todo = ({todo}) => {
 
       return (
        <>
          <div> 
            <h3>{todo.Text}</h3>
          </div>
          <div>
            <button>Edit</button>
            <button>Completed</button>
          </div>
        </>
      );
}
 
export default Todo;