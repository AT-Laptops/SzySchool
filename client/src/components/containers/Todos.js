import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { setTodo } from './../../actions/setTodo';
import { todos } from './../../actions/todos';
import PropTypes, { func } from 'prop-types';

const Todos = ({setTodo, todos}) => {
    const date = useSelector(state => state.reminder.date)
    const allTodos = useSelector(state => state.reminder.todos);
    const day = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);

    useEffect(() => {
        todos(date);
    }, []);

    const undoneTodos = allTodos.map((todo) => {
        if (todo.isDone) {
            return (
                <div className='todos__wrapper'  key={ todo._id } onClick={ () => { setTodo(todo, date) } } >
                    <div className={ !todo.isDone ? 'todos__wrapper__button todos__wrapper__button--done' : 'todos__wrapper__button' } ></div>
                    <p className='todos__wrapper__todo' >
                        { todo.content }
                    </p>
                </div>
            )
        } 
        return true;
    });

    const doneTodos = allTodos.map((todo) => {
        if (!todo.isDone) {
            return (
                <div className='todos__wrapper'  key={ todo._id } onClick={ () => { setTodo(todo, date) } } >
                    <div className={ !todo.isDone ? 'todos__wrapper__button todos__wrapper__button--done' : 'todos__wrapper__button' } ></div>
                    <p className='todos__wrapper__todo' >
                        { todo.content }
                    </p>
                </div>
            )
        }
        return true;
    })

    return (
        <section className='todos'>
            <h2 className='todos__header'>{day}</h2>
            <div className='todos__undone'>
                <h3 className='todos__undone__h3'>Do zrobienia:</h3>
                { undoneTodos }
            </div>
            <div className='todos__done'>
                <h3 className='todos__done__h3'>Ukończono:</h3>
                { doneTodos }
            </div>
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