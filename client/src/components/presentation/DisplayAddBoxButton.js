import React from 'react';
import './../../App.css';
import { FaPlus } from 'react-icons/fa';

const DisplayAddBoxButton = ({text}) => {
    return (
        <button className='displayaddboxbutton'><FaPlus></FaPlus></button>
    )
}

export default DisplayAddBoxButton;