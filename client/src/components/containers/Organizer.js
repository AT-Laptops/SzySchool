import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reminder } from './../../actions/reminder';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Organizer = ({reminder}) => {
    const date = useSelector(state => state.reminder.date);
    const todos = useSelector(state => state.reminder.todos);
    useEffect(() => {
        reminder(date);    
    }, []);
    const day = date => {
        switch (date.getDay()) {
            case 0:
                return 'Niedziela';
            case 1: 
                return 'Poniedziałek';
            case 2: 
                return 'Wtorek';
            case 3:
                return 'Środa';
            case 4:
                return 'Czwartek';
            case 5:
                return 'Piątek';
            case 6:
                return 'Sobota';
            default:
                return null;
        } 
    }

    //dodawaj +1 do godziny bo jest cofnięta to tyłu

    const generateHourList = (start, increment) => {
        let hourList = [];
        for (start; start <= 24; start += increment) {
            hourList.push(<div key={ start }>{ start }</div>);
        }
        return hourList;
    }

    const todoList = todos.map((todo) =>
        <div className='organizer__todos_todo' key={todo._id}>
            {todo.content}
        </div>
    );
    
    return (
        <aside className='organizer'>
            {/* <div key={ todos[0] ? todos[0]._id : ''}>{todos[0] ? todos[0].content : ''}</div> */}
            <div className='ogarnizer__header'>
                <h2 className='organizer__header__day-number'>{ date.getDate() }</h2>
                <h2 className='organizer__header__day-name'>{ day(date) }</h2>
            </div>
            <div className='organizer__todos'>
                { todoList }
                { generateHourList(0, 2) }
            </div>
        </aside>
    );
}

Organizer.propTypes = {
    reminder: PropTypes.func.isRequired,
};
  
const mapStateToProps = state => ({
    
});
  
export default connect(
    mapStateToProps,
    { reminder }
)(Organizer);
