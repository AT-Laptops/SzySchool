import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UndoneTodos from './../presentation/UndoneTodos';
import { useSelector } from 'react-redux';

const Home = () => {
    const date = new Date();
    const day = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);
    return (
        <div className='home'>
            <h3 home__header> { day } </h3>
            <UndoneTodos date={ date }></UndoneTodos>
            <Sidebar></Sidebar>
        </div>
    )
}

export default Home;