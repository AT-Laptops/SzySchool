import './../../App.css';
import React, { useState } from 'react';
import { register } from './../../actions/register';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useInput from '../containers/useInput';
import { Link } from 'react-router-dom';

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

const Register = ({register, isAuthenticated}) => {
    const [error, setError] = useState(null);
    const { form, handleChange } = useInput({
        email: '',
        password: '',
        passwordRep: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorMsg = validate(form);
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        register(form.email, form.password);
    }

    return (
        <form className='form' action="" onSubmit={ handleSubmit } >
            <p className='form__error'>{ error }</p>
            <div className='form__wrapper'>
                <label className='form__wrapper__label' htmlFor="email">Email</label>
                <input type="email" className='form__wrapper_input' name='email' value={ form.email } onChange={ handleChange } />
            </div>
            <div className='form__wrapper'>
                <label className='form__wrapper__label' htmlFor="password">Hasło</label>
                <input type="password" className='form__wrapper_input' name='password' value={ form.password } onChange={ handleChange } />
            </div>
            <div className='form__wrapper'>
                <label className='form__wrapper__label' htmlFor="passwordRep">Powtórz Hasło</label>
                <input type="password" className='form__wrapper_input' name='passwordRep' value={ form.passwordRep } onChange={ handleChange } />
            </div>
            <input type="submit" className='form__submit' value='Zarejestruj' onClick={ handleSubmit } />
            <Link className='form__link' to='/login'>Masz konto? Zaloguj się</Link>
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