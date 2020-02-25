import './../../App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Organizer = ({ day }) => {
    useEffect(() => {
        console.log(day);
    });

    return (
        <aside className='organizer'>
            {/* <p>{ day }</p> */}
        </aside>
    );
}

Organizer.propTypes = {
    day: PropTypes.instanceOf(Date),
};

const mapStateToProps = state => ({
    day: state.reminder.day
});

export default connect(
    mapStateToProps,
    { }
)(Organizer);