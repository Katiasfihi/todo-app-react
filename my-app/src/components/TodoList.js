import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos, update, setUpdate}) => {
   
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((todo) => (
                    <Todo  todos={todos} setTodos={setTodos} text={todo.text} key={todo.id} todo={todo} update={update} setUpdate={setUpdate} />
                )
                )}
            </ul>
       
        </div>
    )
}

export default TodoList