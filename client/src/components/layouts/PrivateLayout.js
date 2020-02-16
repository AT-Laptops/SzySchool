import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

const PrivateLayout = () => {
    return (
        <div className='PrivateLayout'>
            <Switch>
                <Route exact path="/register" component={ Register }></Route>
                <Route exact path="/login" component={ Login }></Route>
            </Switch>
        </div>
    )
}

export default PrivateLayout;