import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import * as data from './../../config.json';

const NotesEditor = () => {
    return (
        <Editor
            apiKey={ data.apiKey }
        >
            
        </Editor>
    )
}

export default NotesEditor;