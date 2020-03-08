import './../../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaClipboardList } from 'react-icons/fa';


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
            case '/todos' :
                setState('todos');
                break;
            default : 
                setState('home'); 
                break;
        }
    }, []);

    return (
        <nav className='navbar'>
            <div onClick={() => setState('home')} className={state === 'home' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
            <Link to="/home" className="navbar__element__link" >
                <FaHome className='navbar__element__link__icon' />
            </Link>
            </div>
            <div onClick={() => setState('calendar')} className={state === 'calendar' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/calendar" className="navbar__element__link" >
                    <FaCalendarAlt className='navbar__element__link__icon' />
                </Link>
            </div>
            <div onClick={() => setState('todos')} className={state === 'todos' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/todos" className="navbar__element__link" >
                    <FaClipboardList className='navbar__element__link__icon' />
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;