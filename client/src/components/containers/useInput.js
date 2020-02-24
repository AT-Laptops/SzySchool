import { useState } from 'react';

function useInput(initialValue) {
    const[form, setForm] = useState(initialValue);
    const handleChange = e => {
        e.persist();
        setForm(form => ({
                ...form,
                [e.target.name]: e.target.value,
            })
        );
    }

    return {
        form,
        handleChange,
    }
}

export default useInput;