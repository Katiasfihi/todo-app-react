import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css';



function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])


  return (
    <div className="App">
      <header>
        <h1>Katia's Todo List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
