import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';


const NotesEditor = () => {

    return (
        <div>
            <Editor 
                initialValue='chuj'
                
            ></Editor>
        </div>
    )    
}

export default NotesEditor;