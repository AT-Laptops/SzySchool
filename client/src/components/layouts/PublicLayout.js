import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CalendarPage from './CalendarPage';

const PublicLayout = () => {
    return (
        <div className='PublicLayout'>
            <Switch>
                <Route exact path="/calendar" component={ CalendarPage }></Route>
                <Route exact path="/" component={ Home }></Route>
            </Switch>
        </div>
    )
}

export default PublicLayout;