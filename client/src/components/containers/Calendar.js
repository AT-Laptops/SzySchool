import './../../App.css';
import React, { useState, useEffect } from 'react';

const Calendar = () => {

    const [date, setDate] = useState(new Date());
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [day, setDay] = useState(date.getDate());
    
    useEffect(() => {
        const interval = setInterval(() => updateDate(), 1000);

        return function cleanUp() {
            clearInterval(interval);
        }
    });

    function updateDate() {
        setDate(new Date());
        setYear(date.getFullYear());
        setMonth(date.getMonth() + 1);
        setDay(date.getDate());
    }

    return (
        <div>
            <h2>{year}</h2>
            <h3>{month}</h3>
            <p>{day}</p>
        </div>
    )
}

export default Calendar;