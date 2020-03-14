import React from 'react';
import { setTodo } from './../../actions/setTodo';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
import { MdCheckBox} from 'react-icons/md';

const UndoneTodos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos);
    let doneTodos = [];
    todos.map((todo) => {
        if (todo.isDone) {
            doneTodos.push(
                <div className='todos__wrapper todos__wrapper--done' key={ todo._id } onClick={ () => { dispatch(setTodo(todo, props.date)) } } >
                    <MdCheckBox className='todos__icons todos__icons--done'></MdCheckBox>
                    <p className='todos__todo' > { todo.content } </p>
                    <FaChevronDown className='todos__icons todos__icons--done'></FaChevronDown>
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