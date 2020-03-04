import './../../App.css';
import React from 'react';
import { todos } from './../../actions/todos';
import { useDispatch, useSelector } from 'react-redux';

const Day = ({ year, monthNumber, dayNumber }) => {
    const date = new Date();
    const selectedDay = useSelector(state => state.reminder.date);
    const dispatch = useDispatch();
    return (
        <div className='calendar__month__day' key={ dayNumber } 
        onClick={ () => { 
            dispatch(todos(new Date(year, monthNumber, dayNumber, 20))); 
            dispatch({ type: 'SET_DAY', payload: new Date(year, monthNumber, dayNumber, 20)}); }}>
            <span className={ 
                date.getFullYear() === year && date.getDate() === dayNumber && date.getMonth() === monthNumber ? 
                selectedDay.getDate() === dayNumber && selectedDay.getMonth() === monthNumber ?
                'calendar__month__day__text calendar__month__day__text--active calendar__month__day-selected' :
                'calendar__month__day__text calendar__month__day__text--active' :
                selectedDay.getDate() === dayNumber && selectedDay.getMonth() === monthNumber ?
                'calendar__month__day__text calendar__month__day-selected' :
                'calendar__month__day__text'
            }>
            { dayNumber }</span>
        </div>
    )
}

export default Day;