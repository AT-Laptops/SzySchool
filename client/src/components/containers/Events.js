import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Events = () => {
    const events = useSelector(state => state.reminder.events);
    const [eventsArr, setEventsArr] = useState(null);

    useEffect(() => {
        let eventsArray = [];

        events.map(event => {
            eventsArray.push(
                <div className='events__wrapper' key={event._id} style={{ background: setColor(event.predefinedType) }}>
                    <span className='events__title' >{ event.title }</span>
                    <FaChevronDown className='events__icons'></FaChevronDown>
                </div>
            );
            return eventsArray;
        });

        setEventsArr(eventsArray);

    }, [events]);

    const setColor = (type) => {
        switch (type) {
            case 'Sprawdzian':
                return '#E52B2B';
            case 'Egzamin':
                return '#9656D6';
            case 'Zaliczenie':
                return '#347DF4';
            case 'Kartkówka':
                return '#F17E1F';
            case 'Ćwiczenia':
                return ' #43C935'; 
            case 'Inne':
                return '#FFC41D';
            default: 
                return '#FFC41D';
        }
    }

    return (
        <section className='events'>
            { eventsArr }
        </section>
    )
}

export default Events;