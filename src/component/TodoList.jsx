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
      {state.todos.length > 0 && state.todos.map((todo, id) => {
        return (
          <div className="row" key={id} id={id}>
            <div className="col">
              <div className="input-group mb-2">
                <span class="input-group-text bg-primary text-light" id="basic-addon1">#{id}</span>
                <label type="text" className="form-control text-primary" placeholder="">{todo}</label>
                <button className="btn btn-danger" type="button" value={todo} onClick={removeTodoHandler}>x</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}