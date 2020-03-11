import React from 'react';
import Calendar from './../containers/Calendar';
import Sidebar from './Sidebar';
import Organizer from './../containers/Organizer';

const CalendarPage = () => {
    return (
        <div className='calendarPage'>
            <div className='calendarPage__content'>
                <Calendar></Calendar>
                {/* <Organizer></Organizer> */}
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}

export default CalendarPage;