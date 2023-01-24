import React, { Component } from 'react'
import 'bootstrap/dist/js/bootstrap.min'
import Todo from './component/Todo'
import TodoList from './component/TodoList'
import Provider from './context/TodoContext'
import './style/App.scss'

function App() {
  return (
    <div className="App">
      <Provider>
        <TodoList />
        <nav className="navbar navbar-expand-lg bg-primary fixed-top bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Todo List App with Context</a>
            <Todo />
          </div>
        </nav>
      </Provider>
    </div>
  )
}

export default App
