import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css';



function App() {

  

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterHandler()}, [todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default :
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Katia's Todo List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
