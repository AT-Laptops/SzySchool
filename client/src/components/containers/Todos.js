import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { setTodo } from './../../actions/setTodo';
import { todos } from './../../actions/todos';
import PropTypes from 'prop-types';

const Todos = ({setTodo, todos}) => {
    const date = useSelector(state => state.reminder.date)
    const allTodos = useSelector(state => state.reminder.todos);
    const day = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);

    useEffect(() => {
        todos(date);  
    }, []);

    const todosList = allTodos.map((todo) => 
        <div className='todos__undone__wrapper'  key={ todo._id }>
        <p className={ todo.isDone ? 'todos__undone__wrapper__todo todos__undone__wrapper__todo--done' : 'todos__undone__wrapper__todo'  }>
            { todo.content }
        </p>
        <button onClick={ () => { setTodo(todo, date) } }   className='todos__undone__wrapper__button' >Lorem</button>
        </div>
    );


    return (
        <section className='todos'>
            <h2 className='todos__header'>{day}</h2>
            <div className='todos__undone'>
                { todosList }
            </div>
            <div className='todos__done'></div>
        </section>
    )
}

Todos.propTypes = {
    setTodo: PropTypes.func.isRequired,
    todos: PropTypes.func.isRequired,
};
  
const mapStateToProps = state => ({
    
});
  
export default connect(
    mapStateToProps,
    { setTodo, todos }
)(Todos);