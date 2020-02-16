import './../../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = () => {

    const [state, setState] = useState('home');

    useEffect(() => {
        switch (window.location.pathname) {
            case '/home' : 
                setState('home'); 
                break;
            case '/calendar' : 
                setState('calendar'); 
                break;
            default : 
                setState('home'); 
                break;
        }
    }, []);

    return (
        <nav className='navbar'>
            <div onClick={() => setState('home')} className={state === 'home' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
            <Link to="/" className="navbar__element__link" ></Link>
            </div>
            <div onClick={() => setState('calendar')} className={state === 'calendar' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/calendar" className="navbar__element__link" ></Link>
            </div>
            <div onClick={() => setState('register')} className={state === 'register' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/register" className="navbar__element__link" ></Link>
            </div>
        </nav>
    );
}

export default Navigation;