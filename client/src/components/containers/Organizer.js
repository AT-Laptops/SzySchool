import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from './../../actions/todos';

const Organizer = ({ state }) => {
    const date = useSelector(state => state.reminder.date);
    const allTodos = useSelector(state => state.reminder.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todos(date));
    }, [date, dispatch]);
    
    const day = date => {
        switch (date.getDay()) {
            case 0:
                return 'Niedziela';
            case 1: 
                return 'Poniedziałek';
            case 2: 
                return 'Wtorek';
            case 3:
                return 'Środa';
            case 4:
                return 'Czwartek';
            case 5:
                return 'Piątek';
            case 6:
                return 'Sobota';
            default:
                return null;
        } 
    }

    //dodawaj +1 do godziny bo jest cofnięta to tyłu

    const generateHourList = (start, increment) => {
        let hourList = [];
        for (start; start <= 24; start += increment) {
            hourList.push(<div key={ start }>{ start }</div>);
        }
        return hourList;
    }

    const todoList = allTodos.map((todo) =>
        <div className='organizer__todos_todo' key={todo._id}>
            {todo.content}
        </div>
    );
    
    return (
        <aside className={ state ? 'organizer' : 'organizer organizer--hide'}>
            <div className='ogarnizer__header'>
                <h2 className='organizer__header__day-number'>{ date.getDate() }</h2>
                <h2 className='organizer__header__day-name'>{ day(date) }</h2>
            </div>
            <div className='organizer__todos'>
                { todoList }
                { generateHourList(0, 2) }
            </div>
        </aside>
    );
}
  
export default Organizer;
