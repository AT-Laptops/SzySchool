import './../../App.css';
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import UndoneTodos from './../presentation/UndoneTodos';
import DoneTodos from './../presentation/DoneTodos';
import AddBox from './../presentation/AddBox';
import AddTodo from './../containers/AddTodo';


const Todos = () => {
    const date = useSelector(state => state.reminder.date);
    const day = `${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`;
    const [isVisible,] = useState(false);
    return (
        <section className='todos'>
            <h2 className='todos__header'>{day}</h2>
                <UndoneTodos date={ date }></UndoneTodos>
                <DoneTodos date={ date }></DoneTodos>
                <AddBox text='Dodaj Todo' show={ isVisible }>
                    <AddTodo />
                </AddBox>
        </section>
    )
}
  
export default Todos;