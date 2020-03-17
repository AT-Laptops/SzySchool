import React, { useState } from 'react';
import { setTodo } from './../../actions/setTodo';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
import { MdCheckBox} from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';
import { FaTrashAlt } from 'react-icons/fa';

const UndoneTodos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos);
    const [state, setState] = useState(false);
    let doneTodos = [];
    todos.map((todo) => {
        if (todo.isDone && todo.bullets.length === 0) {
            doneTodos.push(
                <div className='todos__wrapper todos__wrapper--done' key={ todo._id } >
                    <MdCheckBox className='todos__icons todos__icons--done' onClick={ () => { dispatch(setTodo(todo, props.date)) } }></MdCheckBox>
                    <p className='todos__todo' onClick={ () => { dispatch(setTodo(todo, props.date)) } }> { todo.title } </p>
                    <FaChevronDown onClick={ () => setState(!state) } className='todos__icons todos__icons--done'></FaChevronDown>
                    <div className={ state ? 'todos__functions' : 'todos__functions todos__functions--hide'}>
                        <AiFillPlusCircle></AiFillPlusCircle>
                        <GoPencil></GoPencil>
                        <FaTrashAlt></FaTrashAlt>
                    </div>
                </div>
            )
        } else {
            doneTodos.push('');
        }
        return doneTodos;
    });


    return (
        <div className='todos__done'>
            { doneTodos }
        </div>
    );
}

export default React.memo(UndoneTodos);