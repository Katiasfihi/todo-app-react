import React from 'react'

const Todo = ({text, todos, todo, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        console.log(todos, 'carol')
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                console.log(item.id, 'katia')
                console.log(todo.id, 'katiaaaa')
                return {
                    ...item, completed: !item.completed,
                };
            } 
            return item;
        }))
    }
    console.log(todo.completed, 'hellooo')
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`} >{text}</li>
            <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    )
}

export default Todo