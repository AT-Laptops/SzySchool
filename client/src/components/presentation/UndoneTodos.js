import React from 'react';
import { setTodo } from './../../actions/setTodo';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

const UndoneTodos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos);
    let undoneTodos = [];
    todos.map((todo) => {
        if (!todo.isDone) {
            undoneTodos.push(
                <div className='todos__wrapper'  key={ todo._id } onClick={ () => { dispatch(setTodo(todo, props.date)) } } >
                    <MdCheckBoxOutlineBlank className='todos__icons'></MdCheckBoxOutlineBlank>
                    <p className='todos__todo' > { todo.content } </p>
                    <FaChevronDown className='todos__icons'></FaChevronDown>
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