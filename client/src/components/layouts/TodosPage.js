import React from 'react';
import Todos from './../containers/Todos';
import Sidebar from './Sidebar';
import './../../App.css';

const TodosPage = () => {

    return (
        <section className='todos-page'>
            <Todos></Todos>
            <Sidebar></Sidebar>
        </section>
    )
}

export default TodosPage;