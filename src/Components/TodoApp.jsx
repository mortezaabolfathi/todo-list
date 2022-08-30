import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [todoS, setTodoS] = useState([]);
  const [filterTodoSelected, setFilterTodoSelected] = useState([]);
  const [status,setStatus]=useState("all")

  useEffect(()=>{
    filterTodoS(status)
  },[todoS,status]);

  const addTodo = (inputText) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      Text: inputText,
      isCompleted: false,
    };
    setTodoS([...todoS, newTodo]);
  };

  const completedHandler = (enterId) => {
    const cloneTodoS = [...todoS];
    const selectedCompleted = cloneTodoS.filter((T) => T.id === enterId);
    selectedCompleted[0].isCompleted = !selectedCompleted[0].isCompleted;
    setTodoS(cloneTodoS);
  };

  const onRemoveTodo = (enterId) => {
    const cloneTodoS = [...todoS];
    const selectedTodoSRemove = cloneTodoS.filter((T) => T.id !== enterId);
    setTodoS(selectedTodoSRemove);
  };

  const updateTodo = (enterId, newValue) => {
    const cloneTodoS = [...todoS];
    const selectedCompleted = cloneTodoS.filter((T) => T.id === enterId);
    selectedCompleted[0].Text = newValue;
    setTodoS(cloneTodoS);
  };

  const filterTodoS = (status) => {
    //status is e.target.value that get option in navbar
    setStatus(status)
    switch (status) {
      case "unCompleted":
        setFilterTodoSelected(todoS.filter((t) => t.isCompleted === false ));
        break;
      case "completed":
        setFilterTodoSelected(todoS.filter((t) => t.isCompleted === true));
        break;
      default:
        setFilterTodoSelected(todoS);
    }
    console.log("filterTodoSelected is :" , filterTodoSelected);
  };

  return (
    <div>
      <Navbar
        unCompleted={todoS.filter((t) => !t.isCompleted).length}
        filterTodoS={filterTodoS}
      />

      <TodoForm submitTodo={addTodo} />
      <TodoList
        todoS={filterTodoSelected}
        onCompleted={completedHandler}
        onDeleteTodo={onRemoveTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
