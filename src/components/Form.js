import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {v1 as uuid} from 'uuid';
import {addTodo} from '../redux/actions';

const Form = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            name: todo,
            id: uuid(),
        }))
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
                <button>Submit Todo</button>
            </form>
        </div>
    )
}

export default Form
