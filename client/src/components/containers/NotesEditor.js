import React, { useState } from 'react';
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
                    menubar: false,
                    statusbar: false,
                    height: '70vh',
                    plugins: 'lists table',
                    fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt 48pt 56pt',
                    style_formats: [
                        {
                            title: 'Nagłówki',
                            items: [
                                { title: 'Nagłówek 1', block: 'h1' },
                                { title: 'Nagłówek 2', block: 'h2' },
                                { title: 'Nagłówek 3', block: 'h3' },
                                { title: 'Nagłówek 4', block: 'h4' },
                                { title: 'Normalny', block: 'span' },
                            ]
                        },
                    ],
                    toolbar: "styleselect | fontsizeselect fontselect bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table",
                    mobile: {
                        menubar: true,
                    },
                }}
            ></Editor>
            <button onClick={ () => console.log(data) }>Zapisz</button>
        </div>
    )    
}

export default NotesEditor;