import React, { useState } from 'react';
import Calendar from './../containers/Calendar';
import Sidebar from './Sidebar';
import Organizer from './../containers/Organizer';
import { useEffect } from 'react';
import AddEventPopup from '../containers/AddEventPopup'
import { showAddEventPopup } from '../../actions/popups';

const CalendarPage = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        const showOrganizer = () => {
            let xStart, xEnd;
            window.addEventListener('touchstart', e => xStart = e.touches[0].clientX);
            window.addEventListener('touchmove', e => xEnd = e.touches[0].clientX);
            window.addEventListener('touchend', () => {
                if (xStart - xEnd > 0) setState(true);
                if (xStart - xEnd < 0) setState(false);
            })
        }
        showOrganizer();
    }, [])

    return (
        <div className='calendarPage'>
            <AddEventPopup />
            <div className='calendarPage__content'>
                <Calendar></Calendar>
                <Organizer state={state}></Organizer>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}

export default CalendarPage;