import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const NotesEditor = () => {
    const [data, setData] = useState('');

    return (
        <div>
            <Editor 
                value={data}
                onEditorChange={setData}
                init={{
                    selector: 'textarea',
                    mobile: {
                        menubar: true
                    }
                }}
            ></Editor>
            <button onClick={ () => console.log(data) }>lkdsjklj</button>
        </div>
    )    
}

export default NotesEditor;