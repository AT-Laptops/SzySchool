import './../../App.css';
import React, { useState, useEffect } from 'react';
import store from './../../store';

const Organizer = () => {
    const [data, getData] = useState(null);

    useEffect( () => {
    store.subscribe(() => {
        getData(store.getState().reminder.day);
    })
    })

    return (
        <aside className='organizer'>
            <p>{ data }</p>
        </aside>
    );
}

export default Organizer;