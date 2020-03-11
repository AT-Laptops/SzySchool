import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import UndoneTodos from './../presentation/UndoneTodos';
import { useDispatch } from 'react-redux';
import { todos } from './../../actions/todos';


const Home = () => {
    const date = new Date();
    const day = `${(date.getDate()).toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todos(new Date()));
    }, []);

    return (
        <div className='home'>
            <div className='home__content'>
                <h3 className='home__header'> { day } </h3>
                <UndoneTodos date={ date }></UndoneTodos>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}

export default Home;