import React from 'react';
import Todos from './../containers/Todos';
import Sidebar from './Sidebar';

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