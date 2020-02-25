import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Organizer = () => {
    const day = useSelector(state => state.reminder.day);
    //nie wiem co się dzieje, głębsza rozkmina
    return (
        <aside className='organizer'>
            {day}
        </aside>
    );
}

export default Organizer;