import './../../App.css';
import React, { useState, useEffect } from 'react';

const Calendar = () => {

    const [date, setDate] = useState(new Date());
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());
    const [day, setDay] = useState(date.getDate());
    const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(year, month + 1));

    useEffect(() => {
        const interval = setInterval(() => updateDate(), 60000);

        return function cleanUp() {
            clearInterval(interval);
        }
    });

    function updateDate() {
        setDate(new Date());
        setYear(date.getFullYear());
        setMonth(date.getMonth());
        setDay(date.getDate());
    }

    function getFirstDay (year, month) {
        return new Date(year, month, 1).getDay();
    };

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    const week = [
        {
            dayNumber: 1, 
            dayFullName: 'Poniedziałek',
            dayShortName: 'Pn',
        },
        {
            dayNumber: 2, 
            dayFullName: 'Wtorek',
            dayShortName: 'Wt',
        },
        {
            dayNumber: 3, 
            dayFullName: 'Środa',
            dayShortName: 'Śr',
        },
        {
            dayNumber: 4, 
            dayFullName: 'Czwartek',
            dayShortName: 'Czw',
        },
        {
            dayNumber: 5, 
            dayFullName: 'Piątek',
            dayShortName: 'Pt',
        },
        {
            dayNumber: 6, 
            dayFullName: 'Sobota',
            dayShortName: 'So',
        },
        {
            dayNumber: 7, 
            dayFullName: 'Niedziela',
            dayShortName: 'Nd',
        }
    ];
    
    function generateCalendar(daysInMonth) {
        const calendarDays = [];
        const firstDay = getFirstDay(year, month, 1);

        for (let i = 0; i < firstDay - 1; i++) {
            calendarDays.push(<div className={ 'calendar__month__day' } key={'empty' + i}></div>)
        }

        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays.push(<div className={ i === day ? 'calendar__month calendar__month__day--active' : 'calendar__month__day' } key={i}>{i}</div>)
        }

        return calendarDays;
    }

    const calendarDays = generateCalendar(daysInMonth);

    const calendarHeader = [];

    for (const [index, value] of week.entries()) {
        calendarHeader.push(<div key={index}>{value.dayShortName}</div>);
    }
    

    return (
        <div className='calendar'>
            <h2>{year}</h2>
            <h3>{month}</h3>
            <div className='calendar__month'>
                {calendarHeader}
                {calendarDays}
            </div>
        </div>
    )
}

export default Calendar;