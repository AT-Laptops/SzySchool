import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../containers/useInput';
import { login } from './../../actions/login';
import { useHistory, Link } from 'react-router-dom';

const validate = (form) => {
    if(!form.email) {
        return 'Musisz podać email!';
    }

    if (!form.password) {
        return 'Wpisz hasło!';
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
    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMsg = validate(form);
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        dispatch(login(form.email, form.password, history));
    }

    return (
        <div className='login'>
            <h1 className='login__header'>Logowanie</h1>
            <p className='login__error'>{ error }</p>
            <form className='form' onSubmit={ handleSubmit } >
                <div className='form__wrapper'>
                    <label className='form__label' htmlFor="email">Adres e-mail</label>
                    <input type="email" className='form__input' name='email' value={ form.email } onChange={ handleChange } />
                </div>
                <div className='form__wrapper'>
                    <label className='form__label' htmlFor="password">Hasło</label>
                    <input type="password" className='form__input' name='password' value={ form.password } onChange={ handleChange } />
                </div>
                <input type="submit" className='form__submit' value='Zaloguj się' onClick={ handleSubmit } />
            </form>
            <span className='login__question'>Nie masz konta?<Link className='login__link' to='/register'> Stwórz</Link></span>
        </div>
    )
}
  
export default Login;
