import './../../App.css';
import React, { useState } from 'react';
import { register } from './../../actions/register';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const validate = form => {
    // eslint-disable-next-line no-use-before-define
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    if(!form.email) {
        return 'Email jest wymagany';
    } else if (!reg.test(form.email)) {
        return "Zły email";
    }

    if (!form.password) {
        return "Hasło jest wymagane";
    } else if (form.password < 6) {
        return "Hasło jest za krótkie";
    }

    if (!form.passwordRep) {
        return "Hasło jest wymagane";
    } else if (form.passwordRep < 8) {
        return "Hasło jest za krótkie";
    }

    if (form.password !== form.passwordRep) {
        return "Hasła nie są identyczne";
    }

    return null;
}

const Register = ({register, isAuthenticate}) => {
    const [error, setError] = useState(null);
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
        const errorMsg = validate(form);
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        register(email, password);
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
            <div className={ 'form__wrapper'}>
                <label className={ 'form__wrapper__label' } htmlFor="passwordRep">Powtórz Hasło</label>
                <input type="password" className={ 'form__wrapper_input' } name='passwordRep' value={ passwordRep } onChange={ updateField } />
            </div>
            <input type="submit" className={ 'form__submit' } value='Zarejestruj' onClick={ handleSubmit } />
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