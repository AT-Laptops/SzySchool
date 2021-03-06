import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { todos } from './../../actions/todos';
import { events } from './../../actions/events';


const Home = () => {
    const date = new Date();
    const day = `${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todos(new Date()));
        dispatch(events(new Date()));
    }, [dispatch]);

    return (
        <div className='home'>
            <div className='home__content'>
                <h3 className='home__header'> { day } </h3>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}

export default Home;