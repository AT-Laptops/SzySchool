import React from 'react';
import Todos from './../containers/Todos';
import Sidebar from './Sidebar';
import './../../App.css';

const TodosPage = () => {

    return (
        <section className='todosPage'>
            <div className='todosPage__content'>
                <Todos></Todos>
            </div>
            <Sidebar></Sidebar>
        </section>
    )
}

export default TodosPage;