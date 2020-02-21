import React from 'react';
import Calendar from './../containers/Calendar';
import Sidebar from './Sidebar';
import Organizer from './../containers/Organizer';

const CalendarPage = () => {
    return (
        <div className='calendarPage'>
            <Sidebar></Sidebar>
            <Calendar></Calendar>
            <Organizer></Organizer>
        </div>
    )
}

export default CalendarPage;