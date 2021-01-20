import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state);

    const listOfTodoItems = todos.map(todo => {
        return <TodoItem todo={todo} key= {todo.id} />
    });
    
    return (
        <div>
            {listOfTodoItems}
        </div>
    )
}

export default TodoList
