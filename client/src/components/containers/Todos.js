import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillPlusCircle } from 'react-icons/ai';
import SingleTodos from './../presentation/SingleTodos';
import AddBox from './../presentation/AddBox';
import AddTodo from './AddTodo';


const Todos = () => {
    const date = useSelector(state => state.reminder.date);
    const day = `${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`;
    const [isVisible,] = useState(false);
    return (
        <section className='todos'>
            <div className='todos__header-box'>
                <h2 className='todos__header'>Zadania</h2>
                <AiFillPlusCircle className='todos__add-button'></AiFillPlusCircle>
            </div>
            <div className='todos__today'>
                <h2 className='todos__today-header'>DZISIAJ</h2>
                <SingleTodos date={ date }></SingleTodos>
            </div>
                {/* <AddBox text='Dodaj Todo' show={ isVisible }>
                    <AddTodo />
                </AddBox> */}
        </section>
    )
}
  
export default Todos;