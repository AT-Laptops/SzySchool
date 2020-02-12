import './../../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [state, setState] = useState('home');

    return (
        // <div onClick={() => setState(!state)}  className={ state ? 'navbar__element navbar__element--active' : 'navbar__element'}>
        //     <Link to="/" className="navbar__element__link"></Link>
        // </div>

        <nav className="navbar">
            <div onClick={() => setState('home')} className={state === 'home' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/" className="navbar__element__link" ></Link>
            </div>
            <div onClick={() => setState('login')} className={state === 'login' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/login" className="navbar__element__link" ></Link>
            </div>
        </nav>
    );
}

export default Navigation;