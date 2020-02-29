import React from 'react';
import Todos from './../containers/Todos';
import Sidebar from './Sidebar';
import './../../App.css';

const TodosPage = () => {

    return (
        <section className='todos-page'>
            <Sidebar></Sidebar>
            <Todos></Todos>
        </section>
    )
}

export default TodosPage;