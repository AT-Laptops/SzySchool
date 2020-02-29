import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import { setTodo } from './../../actions/setTodo';
import PropTypes from 'prop-types';

const Todos = ({setTodo}) => {
    const date = useSelector(state => state.reminder.date)
    const todos = useSelector(state => state.reminder.todos);
    const [day, setDay] = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);
    const [todosList, setTodosList] = useState();

    useEffect(() => {

        function todosArray() {
            let generatedTodos = todos.map((todo) =>
                <div className='todos__undone__wrapper'  key={ todo._id }>
                <button onClick={ () => { setTodo(todo) } }   className='todos__undone__wrapper__button' >Zmień</button>
                <p className='todos__undone__wrapper__todo'>
                    { todo.content }
                </p>
                </div>
            );
            return generatedTodos;
        }
    
        setTodosList(todosArray);
    }, []);


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
};
  
const mapStateToProps = state => ({
    
});
  
export default connect(
    mapStateToProps,
    { setTodo }
)(Todos);