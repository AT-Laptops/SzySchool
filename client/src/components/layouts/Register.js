import React, { useState } from 'react';
import { register } from './../../actions/register';
import { useDispatch } from 'react-redux';
import useInput from '../containers/useInput';
import { Link, useHistory } from 'react-router-dom';

const validate = form => {
    // eslint-disable-next-line no-use-before-define
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    if(!form.email) {
        return {
            msg: 'Email jest wymagany',
            target: 'email',
        };
    } else if (!reg.test(form.email)) {
        return {
            msg: "Zły email",
            target: 'email',
        };
    }

    if (!form.password) {
        return {
            msg: "Hasło jest wymagane",
            target: 'password',
        };
    } else if (form.password < 6) {
        return {
            msg: "Hasło jest za krótkie",
            target: 'password',
        };
    }

    if (!form.passwordRep) {
        return {
            msg: "Hasło jest wymagane",
            target: 'password2',
        };
    } else if (form.passwordRep < 6) {
        return {
            msg: "Hasło jest za krótkie",
            target: 'password2',
        }
    }

    if (form.password !== form.passwordRep) {
        return {
            msg: "Hasła nie są identyczne",
            target: 'password2',
        };
    }

    return {
        msg: null,
        target: null,
    };
}

const Register = () => {
    const [error, setError] = useState(null);
    const [errorTarget, setErrorTarget] = useState(null);
    const { form, handleChange } = useInput({
        email: '',
        password: '',
        passwordRep: '',
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorMsg = validate(form).msg;
        const errorTarget = validate(form).target;
        if (errorMsg) {
            setError(errorMsg);
            setErrorTarget(errorTarget);
            return;
        }
        dispatch(register(form.email, form.password, history));
    }

    return (
        <div className='form-wrapper'>
            <h1 className='form-wrapper__header'>Rejestracja</h1>
            <p className='form-wrapper__error'>{ error }</p>
            <form className='form' action="" onSubmit={ handleSubmit } >
                <div className='form__wrapper'>
                    <label className='form__label' htmlFor="email">Email<span className={ errorTarget === 'email' ? 'form__star' : 'form__star form__star--hide' }> *</span></label>
                    <input type="email" className={ errorTarget === 'email' ? 'form__input form__input--error' : 'form__input' } name='email' value={ form.email } onChange={ handleChange } />
                </div>
                <div className='form__wrapper'>
                    <label className='form__label' htmlFor="password">Hasło<span className={ errorTarget === 'password' ? 'form__star' : 'form__star form__star--hide' }> *</span></label>
                    <input type="password" className={ errorTarget === 'password' ? 'form__input form__input--error' : 'form__input' } name='password' value={ form.password } onChange={ handleChange } />
                </div>
                <div className='form__wrapper'>
                    <label className='form__label' htmlFor="passwordRep">Powtórz Hasło<span className={ errorTarget === 'password2' ? 'form__star' : 'form__star form__star--hide' }> *</span></label>
                    <input type="password" className={ errorTarget === 'password2' ? 'form__input form__input--error' : 'form__input' } name='passwordRep' value={ form.passwordRep } onChange={ handleChange } />
                </div>
                <input type="submit" className='form__submit' value='Zarejestruj' onClick={ handleSubmit } />
                <span className='form-wrapper__question'>Masz konto?<Link className='form-wrapper__link' to='/link'> Zaloguj się</Link></span>
            </form>
        </div>
    )
}
  
export default Register;