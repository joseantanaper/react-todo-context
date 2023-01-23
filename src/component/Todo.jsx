import React, { useState, useContext } from 'react'
import { todoContext } from '../context/TodoContext'
import { ADD_TODO } from '../constant/Constant'

// Todo Component

export default function Todo() {

  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(todoContext);

  const addTodoHandler = (e) => {
    console.log("Todo.jsx:addTodoHandler", e, todo);
    e.preventDefault();
    if(!todo) return;
    dispatch({ type: ADD_TODO, payload: todo });
    setTodo("");
  }

  return (
    <form>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add Todo</button>
    </form>
  );
}