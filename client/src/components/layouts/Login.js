import './../../App.css';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const validate = form => {
    if(!form.email) {
        return 'Musisz podać email';
    }

    if (!form.password) {
        return 'Wpisz hasło';
    }

    return null;
}

const Login = () => {
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const { email, password } = form;

    const updateField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMsg = validate(form);
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        console.log(form);
    }

    return (
        <form className={ 'form' } action="" onSubmit={ handleSubmit } >
            <p className={ 'form__error' }>{ error }</p>
            <div className={ 'form__wrapper'}>
                <label className={ 'form__wrapper__label' } htmlFor="email">Email</label>
                <input type="email" className={ 'form__wrapper_input' } name='email' value={ email } onChange={ updateField } />
            </div>
            <div className={ 'form__wrapper'}>
                <label className={ 'form__wrapper__label' } htmlFor="password">Hasło</label>
                <input type="password" className={ 'form__wrapper_input' } name='password' value={ password } onChange={ updateField } />
            </div>
            <input type="submit" className={ 'form__submit' } value='Zarejestruj' onClick={ handleSubmit } />
        </form>
    )
}

export default Login;
