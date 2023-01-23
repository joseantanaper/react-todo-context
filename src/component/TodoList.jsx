import React, { useState, useContext } from 'react'
import { todoContext } from '../context/TodoContext'
import { REMOVE_TODO } from '../constant/Constant'

// Todo List Component

export default function TodoList() {

  const { state } = useContext(todoContext);
  const { dispatch } = useContext(todoContext);

  const removeTodoHandler = (e) => {
    console.log("TodoList.jsx:removeTodoHandler", e, e.target.value);
    e.preventDefault();
    if(!e.target.value) return;
    dispatch({ type: REMOVE_TODO, payload: e.target.value });
  }

  return (
    <div>
      <h1>Todo List</h1>
      {state.todos.length > 0 && state.todos.map((todo, id) => {
        return <h4 key={id}>{id} - {todo} <button value={id} onClick={(e) => removeTodoHandler(e)}>x</button></h4> ;
      })}
      
    </div>
  );
}