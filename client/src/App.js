import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PublicLayout from './components/layouts/PublicLayout';
import PrivateLayout from './components/layouts/PrivateLayout';
import CalendarPage from './components/layouts/CalendarPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/calendar" component={ CalendarPage }></Route>
          <Route exact path='/register' component={ PrivateLayout }></Route>
          <Route exact path="/" component={ PublicLayout }></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
