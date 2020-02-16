import './../../App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Login = () => {
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        login: '',
        password: '',
    });

    return (
        <form action="">
            <input type="text"/>
            <input type="text"/>
        </form>
    )
}

export default Login;
