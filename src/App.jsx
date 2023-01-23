import React, { Component } from 'react'
import Todo from './component/Todo'
import TodoList from './component/TodoList'
import Provider from './context/TodoContext'
import './App.css'

function App() {
  return (
    <div className="App">
      <Provider>
        <Todo />
        <TodoList />
      </Provider>
    </div>
  )
}

export default App
