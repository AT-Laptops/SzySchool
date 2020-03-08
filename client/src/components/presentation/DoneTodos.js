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
                    <div className={ todo.isDone ? 'todos__wrapper__button todos__wrapper__button--done' : 'todos__wrapper__button' } ></div>
                    <p className='todos__wrapper__todo' >
                        { todo.content }
                    </p>
                </div>
            )
        } else {
            doneTodos.push('');
        }
        return doneTodos;
    });


    return (
        <div className='todos__done'>
            <h3 className='todos__done__h3'>Ukończono:</h3>
            { doneTodos }
        </div>
    );
}

export default React.memo(UndoneTodos);