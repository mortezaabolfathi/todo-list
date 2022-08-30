import React, { useEffect, useRef, useState } from "react";



const TodoForm = (props) => {

      const inputRef=useRef(null);

      useEffect(()=>{
        inputRef.current.focus()
      },[])
  
  
      const [inputText, setInputText] = useState();

  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (!inputText) {
      alert("enter your todo");
      return;
    }
    props.submitTodo(inputText);
    setInputText("");
  };

  return (
    <>
      {props.edit ? (
        <>
          <form action="" onSubmit={submithandler}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => changeHandler(e)}
              placeholder="update todo...."
              ref={inputRef}
            />
            <button type="submit"> Update </button>
          </form>
        </>
      ) : (
        <>
          <form action="" onSubmit={submithandler}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => changeHandler(e)}
              placeholder="add Todo...."
              ref={inputRef}
            />
            <button type="submit"> ADD </button>
          </form>
        </>
      )}
    </>
  );
};

export default TodoForm;
