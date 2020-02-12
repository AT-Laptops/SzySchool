import React, {Fragment, useState} from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';

const SidebarElement = () => {

    const [state, setState] = useState(false);

    return (
        <div onClick={() => setState(!state)}  className={ state ? 'navbar__element navbar__element--active' : 'navbar__element'}>
            <Link to="/" className="navbar__element__link"></Link>
        </div>
    );
}

export default SidebarElement;