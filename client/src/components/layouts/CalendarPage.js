import React from 'react';
import Calendar from './../containers/Calendar';
import Sidebar from './Sidebar';

const CalendarPage = () => {
    return (
        <div className='CalendarPage'>
            <Sidebar></Sidebar>
            <Calendar></Calendar>
        </div>
    )
}

export default CalendarPage;