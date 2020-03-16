import React from 'react';
import Sidebar from './Sidebar';
import Events from './../containers/Events';

const EventsPage = () => {
    return (
        <section className='eventsPage'>
            <div className='eventsPage__content'>
                <Events></Events>
            </div>
            <Sidebar></Sidebar>
        </section>
    )
}

export default EventsPage;