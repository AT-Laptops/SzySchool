import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import './style/style.scss';

import { loadUser } from './actions/auth';

import PrivateRoute from './components/layouts/PrivateRoute';
import CalendarPage from './components/layouts/CalendarPage';
import NotesPage from './components/layouts/NotesPage';
import setAuthToken from './utils/setAuthToken';
import TodosPage from './components/layouts/TodosPage';
import NotesAddingPage from './components/layouts/NotesAddingPage';
import Login from './components/layouts/Login';
import Register from './components/layouts/Register';
import Home from './components/layouts/Home';
import WelcomePage from './components/layouts/WelcomePage';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider } from 'baseui';
const engine = new Styletron();

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={ WelcomePage }></Route>
          <Route exact path='/login' component={ Login }></Route>
          <Route exact path='/register' component={ Register }></Route>
          <PrivateRoute component={ CalendarPage } path='/calendar'></PrivateRoute>
          <PrivateRoute component={ TodosPage } path='/todos'></PrivateRoute>
          <PrivateRoute component={ NotesAddingPage } path='/addnotes'></PrivateRoute>
          <PrivateRoute component={ NotesPage } path='/notes'></PrivateRoute>
          <PrivateRoute component={ Home } path='/home'></PrivateRoute>
        </Switch>
      </Router>
    </Provider>
    </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
