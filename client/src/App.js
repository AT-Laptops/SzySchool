import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/layouts/Layout';
import Home from './components/layouts/Home';
import CalendarPage from './components/layouts/CalendarPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout></Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/calendar" component={CalendarPage}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
