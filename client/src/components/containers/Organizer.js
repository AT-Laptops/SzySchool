import './../../App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reminder } from './../../actions/reminder';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Organizer = ({reminder}) => {
    const day = useSelector(state => state.reminder.day);
    const dispatch = useDispatch();
    const todos = useSelector(state => state.reminder.todos._id);
    useEffect(() => {
        reminder(day);
        console.log(todos);
    }, [dispatch, day]);
    //nie wiem co się dzieje, głębsza rozkmina
    // https://stackoverflow.com/questions/58850699/useselector-not-updating-when-store-has-changed-in-reducer-reactjs-redux
    return (
        <aside className='organizer'>
            {day}
            {todos}
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
