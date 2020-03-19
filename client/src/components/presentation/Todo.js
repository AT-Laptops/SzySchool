import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoStatus } from './../../actions/changeTodoStatus';
import { todoChange } from './../../actions/todoChange';

import { FaChevronDown } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { GoPencil } from 'react-icons/go';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const Todo = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [state, setState] = useState(false);
    const [todo, setTodo] = useState(props.todo)
    const input = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!disabled) {
            input.current.focus();
        }
    }, [disabled]);

    const handleChange = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        });
    }

    const saveTodoChange = e => {
        if (e.key === 'Enter') {
            console.log('working?');
            setDisabled(true);
            dispatch(todoChange(todo, props.date));
        }
    }

    return (
        <div className='todos__wrapper'>
            <MdCheckBoxOutlineBlank className='todos__icons' onClick={ () => { dispatch(changeTodoStatus(todo, props.date)) } }></MdCheckBoxOutlineBlank>
            <input 
                type='text' 
                className='todos__todo' 
                value={ todo.title } 
                disabled={ disabled } 
                ref={ input }
                name='title'
                onChange={ handleChange }
                onKeyDown={ saveTodoChange }
            />
            <FaChevronDown onClick={ () => setState(!state) } className='todos__icons'></FaChevronDown>
            <div className={ state ? 'todos__functions' : 'todos__functions todos__functions--hide'}>
                <FaPlus className='todos__add'></FaPlus>
                <GoPencil className='todos__edit' onClick={ () => setDisabled(!disabled) }></GoPencil>
                <FaTrashAlt className='todos__delete'></FaTrashAlt>
            </div>
        </div>
    )
}

export default Todo;