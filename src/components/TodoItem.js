import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {deleteTodo, updateTodo} from '../redux/actions'

const TodoItem = ({todo}) => {
    const [inEditMode, setEditMode] = useState(false);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch();

    const handleClick = (todoId) => {
        dispatch(deleteTodo(todoId))
    };
    
    return (
        <div>
            <h1>Todo: {inEditMode ? <input type="text" value={name} onChange={e => setName(e.target.value)}/> : todo.name}</h1>
            <h4>ID: {todo.id[2]}</h4>
            <button onClick={() => {
                if(inEditMode){
                    dispatch(updateTodo({...todo, name}))
                }

                setEditMode(!inEditMode)


            }}>{inEditMode ? 'Update' : 'Edit'}</button>
            <button onClick={() => handleClick(todo.id)}>X</button>
        </div>
    )
}

export default TodoItem
