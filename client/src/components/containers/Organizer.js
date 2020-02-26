import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Organizer = () => {
    const day = useSelector(state => state.reminder.day);
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todo);
    useEffect(() => {
        dispatch({ type: 'GET_DAY', payload: day });
    }, [dispatch, day]);
    //nie wiem co się dzieje, głębsza rozkmina
    // https://stackoverflow.com/questions/58850699/useselector-not-updating-when-store-has-changed-in-reducer-reactjs-redux
    return (
        <aside className='organizer'>
            {day}
            {todos}
        </aside>
    );
}

export default Organizer;