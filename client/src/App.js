import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/layouts/PrivateRoute';
import CalendarPage from './components/layouts/CalendarPage';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import TodosPage from './components/layouts/TodosPage';
import NotesAddingPage from './components/layouts/NotesAddingPage';
import Login from './components/layouts/Login';
import Home from './components/layouts/Home';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={ Login }></Route>
          <PrivateRoute component={ CalendarPage } path='/calendar'></PrivateRoute>
          <PrivateRoute component={ TodosPage } path='/todos'></PrivateRoute>
          <PrivateRoute component={ NotesAddingPage } path='/addnotes'></PrivateRoute>
          <PrivateRoute component={ Home } path='/home'></PrivateRoute>
          {/* <Route exact path="/calendar" component={ CalendarPage }></Route>
          <Route exact path='/todos' component={ TodosPage }></Route>  
          <Route exact path='/addnotes' component={ NotesAddingPage }></Route>   */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
