import React, {useState} from 'react'



const Todo = ({text, todos, todo, setTodos, update, setUpdate }) => {

    const [input, setInput] = useState('')

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

    const updateButton = (e) => {
            setUpdate(e.target.value)
            console.log(e.target.value, 'katia')
    }

   const updating = () => {
       setInput(input)
   }


    console.log(todo.completed, 'hellooo')
    return (
        <div className='todo'>
            <li  className={`todo-item ${todo.completed ? 'completed' : ''}`} >{text}{input}</li>
            <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button  onClick={updateButton} className='update-btn' ><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    )
}

export default Todo