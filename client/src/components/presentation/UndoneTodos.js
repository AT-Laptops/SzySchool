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
                    <div className={ !todo.isDone ? 'todos__wrapper__button todos__wrapper__button--done' : 'todos__wrapper__button' } ></div>
                    <p className='todos__wrapper__todo' >
                        { todo.content }
                    </p>
                </div>
            )
        } else {
            undoneTodos.push('');
        }
        return undoneTodos;
    });


    return (
        <div className='todos__undone'>
            <h3 className='todos__undone__h3'>Do zrobienia:</h3>
            { undoneTodos }
        </div>
    );
}

export default React.memo(UndoneTodos);