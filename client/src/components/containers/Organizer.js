import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reminder } from './../../actions/reminder';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Organizer = ({reminder}) => {
    const date = useSelector(state => state.reminder.date);
    const todos = useSelector(state => state.reminder.todos);
    useEffect(() => {
        reminder();    
    }, [reminder]);
    const day = date => {
        switch (date.getDay() + 1) {
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
            case 7:
                return 'Niedziela';
            default:
                return null;
        } 
    }
    
    return (
        <aside className='organizer'>
            {/* <div key={ todos[0] ? todos[0]._id : ''}>{todos[0] ? todos[0].content : ''}</div> */}
            <h2 className='organizer__day-number'>{ date.getDate() }</h2>
            <h2 className='organizer__day-name'>{ day(date) }</h2>
            <div className='organizer__todos'></div>
        </aside>
    );
}

Organizer.propTypes = {
    reminder: PropTypes.func.isRequired,
};
  
const mapStateToProps = state => ({
    
});
  
export default connect(
    mapStateToProps,
    { reminder }
)(Organizer);
