import React from 'react';
import Notes from './../containers/Notes';
import Sidebar from './Sidebar';

const NotesPage = () => {
    return (
        <div className='notesPage'>
            <div className='notesPage__content'>
                <Notes></Notes>
            </div>
            <Sidebar></Sidebar>
        </div>
    );
}

export default NotesPage;
