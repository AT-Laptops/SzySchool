import React, { useState } from 'react';
import './../../App.css';
import { FaPlus } from 'react-icons/fa';

const AddBox = (props) => {
    const [state, setState] = useState(props.show);
    return (
        <div className='addbox'>
            <div className={ state ? 'addbox__content addbox__content--active' : 'addbox__content' }>
                <h2 className='addbox__header'>{ props.text }</h2>
                { props.children }
            </div>
            <button onClick={ () => setState(!state) } className='displayaddboxbutton'><FaPlus></FaPlus></button>
        </div>
    )
}

export default AddBox;