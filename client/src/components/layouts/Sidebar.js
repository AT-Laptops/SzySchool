import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';

const Sidebar = () => {

    const [state, setState] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__element" onClick={() => setState(!state)} style={{ backgroundColor: state ? '#612377' : 'transparent' }}>
                <Link to="/" className="navbar__element__link"></Link>
            </div>
        </nav>
    );
}

export default Sidebar;