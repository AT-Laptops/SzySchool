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
            <input type="email" className={ 'register__input' } name='email' value={ email } onChange={ updateField } />
            <input type="password" className={ 'register__input' } name='password' value={ password } onChange={ updateField } />
            <input type="password" className={ 'register__input' } name='passwordRep' value={ passwordRep } onChange={ updateField } />
            <input type="submit" value='Zarejestruj' onClick={ handleSubmit } />
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