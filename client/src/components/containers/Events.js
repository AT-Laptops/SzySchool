import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Events = () => {
    const events = useSelector(state => state.reminder.events);

    let eventsArray = [];
    const setColor = (type) => {
        switch (type) {
            case 'Sprawdzian':
                return '#D92B2B';
            case 'Egzamin':
                return '#8E59D9';
            case 'Zaliczenie':
                return '347DF4';
            case 'Kartkówka':
                return '#F26E22';
            case 'Ćwiczenia':
                return '#48BF36'; 
            case 'Inne':
                return '#F2A81D';
            default: 
                return '#F2A81D';
        }
    }

    events.map(event => {
        eventsArray.push(
            <div style={{ background: setColor(event.predefinedType) }}>
                <span>{ event.description }</span>
            </div>
        );
    });


    return (
        <section>
            { eventsArray }
        </section>
    )
}

export default Events;