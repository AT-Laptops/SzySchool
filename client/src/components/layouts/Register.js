import './../../App.css';
import React, { useState, useEffect } from 'react';
import { register } from './../../actions/register';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Register = ({register, isAuthenticate}) => {
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
        console.log('dupa');
        register(email, password);
    }

    return (
        <form className={ 'register' } action="" onSubmit={ handleSubmit } >
            <div className={ 'register__wrapper'}>
                <label className={ 'register__wrapper__label' } htmlFor="email">Email</label>
                <input type="email" className={ 'register__wrapper_input' } name='email' value={ email } onChange={ updateField } />
            </div>
            <div className={ 'register__wrapper'}>
                <label className={ 'register__wrapper__label' } htmlFor="password">Hasło</label>
                <input type="password" className={ 'register__wrapper_input' } name='password' value={ password } onChange={ updateField } />
            </div>
            <div className={ 'register__wrapper'}>
                <label className={ 'register__wrapper__label' } htmlFor="passwordRep">Powtórz Hasło</label>
                <input type="password" className={ 'register__wrapper_input' } name='passwordRep' value={ passwordRep } onChange={ updateField } />
            </div>
            <input type="submit" className={ 'register__submit' } value='Zarejestruj' onClick={ handleSubmit } />
        </form>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};
  
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
  
export default connect(
    mapStateToProps,
    { register }
)(Register);