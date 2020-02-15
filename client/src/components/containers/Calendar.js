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
        daysInMonth: getDaysInMonth(year, date.getMonth()),
        daysInPrevMonth: getDaysInMonth(year, date.getMonth()),
    });
    const [day, setDay] = useState(date.getDate());

    useEffect(() => {
        // const interval = setInterval(() => updateDate(), 60000);

        // return function cleanUp() {
        //     clearInterval(interval);
        // }
    });

    // function updateDate() {
    //     setDate(new Date());
    //     setYear(date.getFullYear());
    //     setMonth({
    //         month: date.getMonth(),
    //         monthName: getMonthName(date.getMonth()),
    //         firstDay: getFirstDay(year, date.getMonth()),
    //         lastDay: getLastDay(year, date.getMonth()),
    //         daysInMonth: getDaysInMonth(year, date.getMonth() + 1),
    //         daysInPrevMonth: getDaysInMonth(year, date.getMonth()),
    //     });
    //     setDay(date.getDate());
    // }

    function getFirstDay(year, month) {
        return new Date(year, month, 1).getDay();
    };

    function getLastDay(year, month) {
        return new Date(year, month + 1, 0).getDay();
    };

    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
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
            default:
                return null;
        }
    }

    function generateCalendar(daysInMonth, daysInPrevMonth, firstDay) {
        const calendarDays = [];

        if (firstDay === 0)
            firstDay = 7;


        for (let i = firstDay - 1; i > 0; i--, daysInPrevMonth--) {
            calendarDays.unshift(<div className={ 'calendar__month__day calendar__month__day--lastMonth' } key={'empty' + i}><span className={ 'calendar__month__day__text' }>{ daysInPrevMonth }</span></div>)
        }

        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays.push(<div className={ i === day ? 'calendar__month__day calendar__month__day--active' : 'calendar__month__day' } key={i}><span className={ 'calendar__month__day__text' }>{ i }</span></div>)
        }

        return calendarDays;
    }

    let calendarDays = generateCalendar(month.daysInMonth, month.daysInPrevMonth, month.firstDay);

    const nextMonth = (e) => {
        e.preventDefault();

        setMonth({
            month: month.month + 1,
            monthName: getMonthName(month.month + 1),
            daysInMonth: getDaysInMonth(year, month.month + 1),
            firstDay: getFirstDay(year, month.month + 1),
            daysInPrevMonth: getDaysInMonth(year, month.month),
        });

        
        // if (month.month === 11) {
        //     setYear(year + 1);
        //     setMonth({
        //         month: new Date(year, 0).getMonth() - 1,
        //     });
        // }
        
        // console.log(month.month + 1);

        calendarDays = generateCalendar(month.daysInMonth, month.daysInPrevMonth, month.firstDay);
    }

    const prevMonth = (e) => {
        e.preventDefault();

        setMonth({
            month: month.month - 1,
            monthName: getMonthName(month.month - 1),
            daysInMonth: getDaysInMonth(year, month.month - 1),
            firstDay: getFirstDay(year, month.month - 1),
            daysInPrevMonth: getDaysInMonth(year, month.month - 2),
        });

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

    for (const [index, value] of week.entries()) {
        calendarHeader.push(<div key={index}>{value.dayShortName}</div>);
    }
    

    return (
        <div className='calendar'>
            <h2>{year}</h2>
            <h3> { month.monthName } </h3>
            <button onClick={ prevMonth }>Poprzedni</button>
            <button onClick={ nextMonth }>Następny</button>
            <div className='calendar__month'>
                {calendarHeader}
                {calendarDays}
            </div>
        </div>
    )
}

export default Calendar;