import React from 'react';
import './../../App.css';

const AddBox = (props) => {
    return (
        <div className='addbox'>
            <h2 className='addbox__header'>{ props.text }</h2>
            { props.children }
        </div>
    )
}

export default AddBox;