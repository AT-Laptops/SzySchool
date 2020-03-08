import './../../App.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../containers/useInput';
import { login } from './../../actions/login';

const validate = (form) => {
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
    const { form, handleChange } = useInput({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMsg = validate(form);
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        dispatch(login(form.email, form.password));
    }

    return (
        <form className={ 'form' } onSubmit={ handleSubmit } >
            <p className={ 'form__error' }>{ error }</p>
            <div className={ 'form__wrapper'}>
                <label className={ 'form__wrapper__label' } htmlFor="email">Email</label>
                <input type="email" className={ 'form__wrapper_input' } name='email' value={ form.email } onChange={ handleChange } />
            </div>
            <div className={ 'form__wrapper'}>
                <label className={ 'form__wrapper__label' } htmlFor="password">Hasło</label>
                <input type="password" className={ 'form__wrapper_input' } name='password' value={ form.password } onChange={ handleChange } />
            </div>
            <input type="submit" className={ 'form__submit' } value='Zaloguj' onClick={ handleSubmit } />
        </form>
    )
}
  
export default Login;
