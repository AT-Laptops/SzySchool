import React from 'react';
import { todos } from './../../actions/todos';
import { showAddTodoPopup, showAddEventPopup } from './../../actions/popups';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const Day = ({ year, monthNumber, dayNumber, name }) => {
    const date = new Date();
    const selectedDay = useSelector(state => state.reminder.date);
    const dispatch = useDispatch();
    return (
        <div className={`calendar__month__day ${name} `}  key={ dayNumber } 
        onClick={ () => { 
            dispatch(todos(new Date(year, monthNumber, dayNumber, 20))); 
            dispatch({ type: 'SET_DAY', payload: new Date(year, monthNumber, dayNumber, 20)}); }}>
            <span className={ 
                date.getFullYear() === year && date.getDate() === dayNumber && date.getMonth() === monthNumber ? 
                selectedDay.getDate() === dayNumber && selectedDay.getMonth() === monthNumber ?
                'calendar__month__day__text calendar__month__day__text--active calendar__month__day--selected' :
                'calendar__month__day__text calendar__month__day__text--active' :
                selectedDay.getDate() === dayNumber && selectedDay.getMonth() === monthNumber ?
                'calendar__month__day__text calendar__month__day--selected' :
                'calendar__month__day__text'
            }>
                <span className="calendar__month__day__text__plus">
                    <ContextMenuTrigger id={`context_menu_${dayNumber}`} holdToDisplay={0}>
                        <FaPlus />
                    </ContextMenuTrigger>
                </span>
                { dayNumber } 
            </span>
            <ContextMenu id={`context_menu_${dayNumber}`} >
                {/* https://github.com/vkbansal/react-contextmenu */}
                <MenuItem onClick={()=>{dispatch(showAddEventPopup(true))}}>
                    Dodaj wydarzenie
                </MenuItem>
                <MenuItem onClick={()=>{dispatch(showAddTodoPopup(true))}}>
                    Dodaj zadanie
                </MenuItem>
            </ContextMenu>
        </div>
    )
}

export default Day;