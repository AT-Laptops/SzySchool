import React from 'react';
import { setTodo } from './../../actions/setTodo';
import { useDispatch, useSelector } from 'react-redux';

const UndoneTodos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos);
    let undoneTodos = [];
    todos.map((todo) => {
        if (!todo.isDone) {
            undoneTodos.push(
                <div className='todos__wrapper'  key={ todo._id } onClick={ () => { dispatch(setTodo(todo, props.date)) } } >
                    <div className='todos__progress-wrapper'><span className='todos__progress'></span></div>
                    <p className='todos__todo' > { todo.content } </p>
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