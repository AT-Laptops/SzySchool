import axios from 'axios';
import setAuthToken from './../utils/setAuthToken';
import {
    USER_LOADED,
    AUTH_ERROR,
} from './types';

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };