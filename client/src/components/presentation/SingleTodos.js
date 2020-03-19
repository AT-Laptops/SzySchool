import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const SingleTodos = (props) => {
    const todos = useSelector(state => state.reminder.todos);
    let undoneTodos = [];
    todos.map((todo) => {
        if (todo.bullets.length === 0) {
            undoneTodos.push(
                <Todo date={ props.date } todo={ todo }  key={ todo._id } ></Todo>
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

export default React.memo(SingleTodos);