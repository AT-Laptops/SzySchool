import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';


const NotesEditor = () => {

    return (
        <div>
            <Editor 
                initialValue='chuj'
                init={{
                    mobile: {
                        menubar: true
                    }
                }}
            ></Editor>
            <button>TEST</button>
        </div>
    )    
}

export default NotesEditor;