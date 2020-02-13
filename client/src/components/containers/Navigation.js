import './../../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = () => {

    const [state, setState] = useState('home');

    return (
        <nav className='navbar'>
            <div onClick={() => setState('home')} className={state === 'home' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
            <Link to="/" className="navbar__element__link" >{state}</Link>
            </div>
            <div onClick={() => setState('calendar')} className={state === 'calendar' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/calendar" className="navbar__element__link" >{state}</Link>
            </div>
        </nav>
    );
}

export default connect()(Navigation);