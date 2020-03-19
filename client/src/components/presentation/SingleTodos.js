import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const SingleTodos = (props) => {
    const todos = useSelector(state => state.reminder.todos);
    let todosArr = [];
    todos.map((todo) => {
        if (todo.bullets.length === 0) {
            todosArr.push(
                <Todo date={ props.date } todo={ todo }  key={ todo._id } ></Todo>
            )
        } else {
            todosArr.push('');
        }
        return todosArr;
    });

    todosArr.sort( x => x ? -1 : 1);

    return (
        <div className='todos__undone'>
            { todosArr }
        </div>
    );
}

export default React.memo(SingleTodos);