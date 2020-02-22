import React from 'react';
import Sidebar from './Sidebar';
import Notes from './../containers/Notes';

const Home = () => {
    return (
        <div className='home'>
            <Notes></Notes>
            <Sidebar></Sidebar>
        </div>
    )
}

export default Home;