import './../../App.css';
import React, { useState, useEffect } from 'react';

const Calendar = () => {

    const [date, setDate] = useState(new Date());
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState({
        month: date.getMonth(),
        monthName: getMonthName(date.getMonth()),
        firstDay: getFirstDay(year, date.getMonth()),
        lastDay: getLastDay(year, date.getMonth()),
        daysInMonth: getDaysInMonth(year, date.getMonth() + 1),
        daysInPrevMonth: getDaysInMonth(year, date.getMonth()),
    });
    const [day, setDay] = useState(date.getDate());

    useEffect(() => {
        // const interval = setInterval(() => updateDate(), 60000);

        // return function cleanUp() {
        //     clearInterval(interval);
        // }
    });

    function updateDate() {
        setDate(new Date());
        setYear(date.getFullYear());
        setMonth({
            month: date.getMonth(),
            firstDay: getFirstDay(year, date.getMonth() + 1),
            lastDay: getLastDay(year, date.getMonth()),
            daysInMonth: getDaysInMonth(year, date.getMonth() + 1),
            daysInPrevMonth: getDaysInMonth(year, date.getMonth()),
        });
        setDay(date.getDate());
    }

    function getFirstDay(year, month) {
        return new Date(year, month, 1).getDay();
    };

    function getLastDay(year, month) {
        return new Date(year, month + 1, 0).getDay();
    };

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    function getMonthName(monthNumber) {
        switch(monthNumber) {
            case 0:
                return 'Styczeń';
            case 1: 
                return 'Luty';
            case 2:
                return 'Marzec';
            case 3:
                return 'Kwieceń';
            case 4: 
                return 'Maj';
            case 5:
                return 'Czerwiec';
            case 6:
                return 'Lipiec';
            case 7:
                return 'Sierpień';
            case 8:
                return 'Wrzesień';
            case 9:
                return 'Październik';
            case 10:
                return 'Listopad';
            case 11:
                return 'Grudzień';
        }
    }

    function generateCalendar(daysInMonth, daysInPrevMonth, lastDay) {
        const calendarDays = [];


        for (let i = lastDay - 1; i > 0; i--, daysInPrevMonth--) {
            calendarDays.unshift(<div className={ 'calendar__month__day calendar__month__day--lastMonth' } key={'empty' + i}>{ daysInPrevMonth }</div>)
        }

        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays.push(<div className={ i === day ? 'calendar__month calendar__month__day--active' : 'calendar__month__day' } key={i}>{i}</div>)
        }

        return calendarDays;
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

    const calendarDays = generateCalendar(month.daysInMonth, month.daysInPrevMonth, month.lastDay);

    const calendarHeader = [];

    for (const [index, value] of week.entries()) {
        calendarHeader.push(<div key={index}>{value.dayShortName}</div>);
    }
    

    return (
        <div className='calendar'>
            <h2>{year}</h2>
            <input type="text" value={ month.monthName }/>
            <div className='calendar__month'>
                {calendarHeader}
                {calendarDays}
            </div>
        </div>
    )
}

export default Calendar;