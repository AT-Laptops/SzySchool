import React, { useState } from 'react';
import useInput from './../containers/useInput'
import { useSelector } from 'react-redux';

const AddTodo = () => {
    const day = useSelector(state => state.reminder.date);
    const header = useState(`${(day.getDate()).toString().padStart(2, '0')}.${(day.getMonth() + 1).toString().padStart(2, '0')}.${day.getFullYear()}r.`);
    const {form, handleChange } = useInput({
        date: day,
        content: '',
    });

    return (
        <form>
            <h2>{ header }</h2>
            <input type="text" value={ form.content } onChange={ handleChange }/>
            <input type="submit" value="Dodaj"/>
        </form>
    )
}

export default AddTodo;