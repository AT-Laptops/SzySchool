import './../../App.css';
import React, { useState, useEffect } from 'react';

const Calendar = () => {

    const [date, setDate] = useState(new Date());
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth());
    const [day, setDay] = useState(date.getDate());

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

    const calendarHeader = [];

    function firstDay(year, month) {
        const data = new Date(year, month, 1);
        return data.getDay();
    };

    function lastDay(year, month) {
        const data = new Date(year, month + 1, 0);
        console.log(data.getDay());
        return data.getDay();
    };

    


    for (const [index, value] of week.entries()) {
        calendarHeader.push(<th className={ firstDay(year, month) === value.dayNumber ? 'currentDay' : '' } key={index}>{value.dayShortName}</th>);
    }

    return (
        <div>
            <h2>{year}</h2>
            <h3>{month}</h3>
            <table>
                <thead>
                    <tr>
                        {calendarHeader}
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </div>
    )
}

export default Calendar;