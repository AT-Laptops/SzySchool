import React from 'react';
import { setTodo } from './../../actions/setTodo';
import { useDispatch, useSelector } from 'react-redux';

const UndoneTodos = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos);
    let doneTodos = [];
    todos.map((todo) => {
        if (todo.isDone) {
            doneTodos.push(
                <div className='todos__wrapper' key={ todo._id } onClick={ () => { dispatch(setTodo(todo, props.date)) } } >
                    <p className='todos__todo' > { todo.content } </p>
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