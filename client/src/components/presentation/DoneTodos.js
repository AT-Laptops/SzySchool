import React from 'react';
import { setTodo } from './../../actions/setTodo';
import { useDispatch, useSelector } from 'react-redux';

const UndoneTodos = () => {
    const dispatch = useDispatch();
    const date = useSelector(state => state.reminder.date);
    const todos = useSelector(state => state.reminder.todos);
    const renderTodos = todos.map((todo) => {
        if (!todo.isDone) {
            return (
                <div className='todos__wrapper'  key={ todo._id } onClick={ () => { dispatch(setTodo(todo, date)) } } >
                    <div className={ !todo.isDone ? 'todos__wrapper__button todos__wrapper__button--done' : 'todos__wrapper__button' } ></div>
                    <p className='todos__wrapper__todo' >
                        { todo.content }
                    </p>
                </div>
            )
        } else {
            return '';
        }
    });


    return (
        <div className='todos__done'>
            <h3 className='todos__done__h3'>Ukończono:</h3>
            { renderTodos }
        </div>
    );
}

export default React.memo(UndoneTodos);