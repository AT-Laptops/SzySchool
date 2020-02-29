import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setTodo } from './../../actions/setTodo';

const Todos = ({setTodo}) => {
    const date = useSelector(state => state.reminder.date)
    const todos = useSelector(state => state.reminder.todos);
    const [day, setDay] = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);

    const todosArray = todos.map((todo) =>
        <div className='todos__undone__wrapper'>
        <button onClick={ () => { setTodo(todo) } }   className='todos__undone__wrapper__button' key={ todo._id } >Zmień</button>
        <p className='todos__undone__wrapper__todo' key={ todo._id }>
            { todo.content }
        </p>
        </div>
    );

    return (
        <section className='todos'>
            <h2 class='todos__header'>{day}</h2>
            <div className='todos__undone'>
                { todosArray }
            </div>
            <div className='todos__done'></div>
        </section>
    )
}

export default Todos;