import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UndoneTodos from './../presentation/UndoneTodos';

const Home = () => {
    const date = new Date();
    const day = useState(`${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`);
    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <h3 home__header> { day } </h3>
            <UndoneTodos date={ date }></UndoneTodos>
        </div>
    )
}

export default Home;