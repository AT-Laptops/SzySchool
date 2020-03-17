import React, { useState } from 'react';
import { setTodo } from './../../actions/setTodo';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { GoPencil } from 'react-icons/go';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const UndoneTodos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos);
    const [state, setState] = useState(false);
    let undoneTodos = [];
    todos.map((todo) => {
        if (!todo.isDone && todo.bullets.length === 0) {
            undoneTodos.push(
                <div className='todos__wrapper'  key={ todo._id } >
                    <MdCheckBoxOutlineBlank className='todos__icons' onClick={ () => { dispatch(setTodo(todo, props.date)) } }></MdCheckBoxOutlineBlank>
                    <p className='todos__todo' onClick={ () => { dispatch(setTodo(todo, props.date)) } } > { todo.title } </p>
                    <FaChevronDown onClick={ () => setState(!state) } className='todos__icons'></FaChevronDown>
                    <div className={ state ? 'todos__functions' : 'todos__functions todos__functions--hide'}>
                        <FaPlus className='todos__add'></FaPlus>
                        <GoPencil className='todos__edit'></GoPencil>
                        <FaTrashAlt className='todos__delete'></FaTrashAlt>
                    </div>
                </div>
            )
        } else {
            undoneTodos.push('');
        }
        return undoneTodos;
    });


    return (
        <div className='todos__undone'>
            { undoneTodos }
        </div>
    );
}

export default React.memo(UndoneTodos);