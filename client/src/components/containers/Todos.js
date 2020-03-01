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
                <div className='todos__undone__wrapper'  key={ todo._id }>
                    <div onClick={ () => { setTodo(todo, date) } }   className={ !todo.isDone ? 'todos__undone__wrapper__button todos__undone__wrapper__button--done' : 'todos__undone__wrapper__button' } ></div>
                    <p className='todos__undone__wrapper__todo' >
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
                <div className='todos__undone__wrapper'  key={ todo._id }>
                    <div onClick={ () => { setTodo(todo, date) } }   className={ !todo.isDone ? 'todos__undone__wrapper__button todos__undone__wrapper__button--done' : 'todos__undone__wrapper__button' } ></div>
                    <p className='todos__undone__wrapper__todo'  >
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
                { undoneTodos }
            </div>
            <div className='todos__done'>
                <h3>Ukończono:</h3>
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