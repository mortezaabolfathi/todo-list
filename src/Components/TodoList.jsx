import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todoS.map((item) => (
        <Todo todo={item} key={item.id}  onCompleted={()=>props.onCompleted(item.id)}/>
      ))}
    </div>
  );
};

export default TodoList;
