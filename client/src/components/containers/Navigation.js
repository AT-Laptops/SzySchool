import './../../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = () => {

    const [state, setState] = useState('home');

    return (
        <nav className="navbar">
            <div onClick={() => setState('home')} className={state === 'home' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/" className="navbar__element__link" />
            </div>
            <div onClick={() => setState('login')} className={state === 'login' ? 'navbar__element navbar__element--active' : 'navbar__element'}>
                <Link to="/login" className="navbar__element__link" />
            </div>
        </nav>
    );
}

export default connect()(Navigation);