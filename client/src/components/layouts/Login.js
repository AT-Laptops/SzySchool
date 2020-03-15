import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../containers/useInput';
import { login } from './../../actions/login';
import { useHistory, Link } from 'react-router-dom';

const validate = (form) => {
    if(!form.email) {
        return { 
            msg: 'Musisz podać email!',
            target: 'email',
        };
    }

    if (!form.password) {
        return {
            msg: 'Wpisz hasło!',
            target: 'password',
        };
    }

    return null;
}

const Login = () => {
    const [error, setError] = useState(null);
    const [errorTarget, setErrorTarget] = useState(null);
    const { form, handleChange } = useInput({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMsg = validate(form).msg;
        const errorTarget = validate(form).target;
        if (errorMsg) {
            setError(errorMsg);
            setErrorTarget(errorTarget);
            return;
        }
        dispatch(login(form.email, form.password, history));
    }

    return (
        <div className='form-wrapper'>
            <h1 className='form-wrapper__header'>Logowanie</h1>
            <p className='form-wrapper__error'>{ error }</p>
            <form className='form' onSubmit={ handleSubmit } >
                <div className='form__wrapper'>
                    <label className='form__label' htmlFor="email">Adres e-mail<span className={ errorTarget === 'email' ? 'form__star' : 'form__star form__star--hide' }> *</span></label>
                    <input type="email" className={ errorTarget === 'email' ? 'form__input form__input--error' : 'form__input' } name='email' value={ form.email } onChange={ handleChange } />
                </div>
                <div className='form__wrapper'>
                    <label className='form__label' htmlFor="password">Hasło<span className={ errorTarget === 'password' ? 'form__star' : 'form__star form__star--hide' }> *</span></label>
                    <input type="password" className={ errorTarget === 'password' ? 'form__input form__input--error' : 'form__input' } name='password' value={ form.password } onChange={ handleChange } />
                </div>
                <input type="submit" className='form__submit' value='Zaloguj się' onClick={ handleSubmit } />
            </form>
            <span className='form-wrapper__question'>Nie masz konta?<Link className='form-wrapper__link' to='/register'> Stwórz</Link></span>
        </div>
    )
}
  
export default Login;
