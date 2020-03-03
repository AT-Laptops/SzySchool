import './../../App.css';
import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import UndoneTodos from './../presentation/UndoneTodos';
import DoneTodos from './../presentation/DoneTodos';

const Todos = () => {
    const date = useSelector(state => state.reminder.date);
    const day = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);
    return (
        <section className='todos'>
            <h2 className='todos__header'>{day}</h2>
                <UndoneTodos></UndoneTodos>
                <DoneTodos></DoneTodos>
        </section>
    )
}
  
export default connect()(Todos);