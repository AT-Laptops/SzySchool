import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AddTodo = ({date}) => {
    const [todo, setTodo] = useState({
        date: null,
        content: '',
    });
    const defaultDate = useSelector(state => state.reminder.date);
    const isDate = () => {
        if (!date) {
            setTodo({
                ...todo,
                date: defaultDate,
            });
        }
    }
    return (
        <form>
            <input type="date" value={todo.date}  />
            <input type="text"/>
            <input type="submit" value="Dodaj"/>
        </form>
    )
}

export default AddTodo;