import React, { useState, useCallback} from 'react';
import useInput from './useInput'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../actions/addTodo';

const AddTodo = () => {
    const day = useSelector(state => state.reminder.date);
    const dispatch = useDispatch();
    const header = `${(day.getDate()).toString().padStart(2, '0')}.${(day.getMonth() + 1).toString().padStart(2, '0')}.${day.getFullYear()}r.`;
    const [, updateComponent] = useState();
    const {form, handleChange } = useInput({
        date: day,
        title: '',
    });
    const forceUpdate = useCallback(() => updateComponent({}), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(form.title, form.date));
        form.title = '';
        forceUpdate();
    }

    return (
        <form onSubmit={ handleSubmit } className='addTodoForm'>
            <h2>{ header }</h2>
            <input type="text" name='title' value={ form.title } onChange={ handleChange }/>
            <input type='submit' value='Dodaj' onClick={ handleSubmit }/>
        </form>
    )
}

export default AddTodo;