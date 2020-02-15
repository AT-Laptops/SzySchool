import './../../App.css';
import React, { useState, useEffect } from 'react';
import { register } from './../../actions/register';

const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordRep: '',
    });

    const { email, password, passwordRep } = form;

    const updateField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        register(email, password);
    }

    return (
        <form className={ 'register' } action="" onSubmit={ handleSubmit } >
            <input type="email" className={ 'register__input' } name='email' value={ email } onChange={ updateField } />
            <input type="password" className={ 'register__input' } name='password' value={ password } onChange={ updateField } />
            <input type="password" className={ 'register__input' } name='passwordRep' value={ passwordRep } onChange={ updateField } />
            <input type="submit" value='Zarejestruj' onClick={ handleSubmit } />
        </form>
    )
}

export default Register;