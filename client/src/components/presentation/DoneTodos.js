import React, { useState } from 'react';
import { changeTodoStatus } from './../../actions/changeTodoStatus';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
import { MdCheckBox} from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';
import { GoPencil } from 'react-icons/go';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const UndoneTodos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos);
    const [state, setState] = useState(false);
    const [disabled, setDisabled] = useState(true);
    let doneTodos = [];
    todos.map((todo) => {
        if (todo.isDone && todo.bullets.length === 0) {
            doneTodos.push(
                <div className='todos__wrapper todos__wrapper--done' key={ todo._id } >
                    <MdCheckBox className='todos__icons todos__icons--done' onClick={ () => { dispatch(changeTodoStatus(todo, props.date)) } }></MdCheckBox>
                    <input type='text' className='todos__todo' defaultValue={ todo.title } disabled={ true }/>
                    <FaChevronDown onClick={ () => setState(!state) } className='todos__icons todos__icons--done'></FaChevronDown>
                    <div className={ state ? 'todos__functions' : 'todos__functions todos__functions--hide'}>
                        <FaPlus className='todos__add'></FaPlus>
                        <GoPencil className='todos__edit' onClick={ () => setDisabled(!disabled) }></GoPencil>
                        <FaTrashAlt className='todos__delete'></FaTrashAlt>
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