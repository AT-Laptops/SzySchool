import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {
    const date = useSelector(state => state.reminder.date)
    const [day, setDay] = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);

    return (
        <section className='todos'>
            <h2 class='todos__header'>{day}</h2>
            <div className='todos__undone'></div>
            <div className='todos__done'></div>
        </section>
    )
}

export default Todos;