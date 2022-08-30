import React from 'react';

const TodoEdit = ({editItem ,onChangeValue,onEditTodoSet,editHandlerPage}) => {
    return ( 
        <div>
            <input type="text" defaultValue={editItem.Text}  onChange={(e)=>onChangeValue(e)}/>
            <button onClick={()=>{onEditTodoSet(editItem); editHandlerPage()}}>set</button>
            <h2>work is : {editItem.Text}</h2>
            <p>id  is: {editItem.id}</p>
        </div>
     );
}
 
export default TodoEdit;