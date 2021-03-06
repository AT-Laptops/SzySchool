import './../../style/style.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaClipboardList } from 'react-icons/fa';
import { MdNoteAdd, MdGridOn } from 'react-icons/md';


const Navigation = () => {

    const [state, setState] = useState();

    useEffect(() => {
        switch (window.location.pathname) {
            case '/' : 
                setState('home'); 
                break;
            case '/calendar' : 
                setState('calendar'); 
                break;
            case '/events' : 
                setState('events'); 
                break;
            case '/todos' :
                setState('todos');
                break;
            case '/notes' :
                setState('notes');
                break;
            default : 
                setState('home'); 
                break;
        }
    }, []);

    return (
        <nav className='navbar'>
            <div onClick={() => setState('home') } className={state === 'home' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
            <Link to="/" className="navbar__link" >
                <FaHome className='navbar__icon' />
                <span className='navbar__site'>Strona gł.</span>
            </Link>
            </div>
            <div onClick={() => setState('events')} className={state === 'events' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/events" className="navbar__link" >
                    <MdGridOn className='navbar__icon' />
                    <span className='navbar__site'>Plan</span>
                </Link>
            </div>
            <div onClick={() => setState('calendar')} className={state === 'calendar' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/calendar" className="navbar__link" >
                    <FaCalendarAlt className='navbar__icon' />
                    <span className='navbar__site'>Terminarz</span>
                </Link>
            </div>
            <div onClick={() => setState('todos')} className={state === 'todos' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/todos" className="navbar__link" >
                    <FaClipboardList className='navbar__icon' />
                    <span className='navbar__site'>Zadania</span>
                </Link>
            </div>
            <div onClick={() => setState('notes')} className={state === 'notes' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/notes" className="navbar__link" >
                    <MdNoteAdd className='navbar__icon' />
                    <span className='navbar__site'>Notatki</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;