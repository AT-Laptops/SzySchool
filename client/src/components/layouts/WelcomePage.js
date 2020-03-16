import React from 'react';
import logo from './../../content/logo.png';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <section className='welcomePage'>
            <div className='welcomePage__wrapper'>
                <img src={ logo } alt="logo" className='welcomePage__logo'/>
                <Link to="/register" className='welcomePage__button'>Zarejestruj się</Link>
            </div>
            <span className='welcomePage__text'>Masz już konto?<Link to="/login" className='welcomePage__link'> Zaloguj się</Link></span>
        </section>
    );
}

export default WelcomePage;