import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ email, password });

      try {
        let result;
        result = await axios.post('/api/auth', body, config);
        dispatch({ type: LOGIN_SUCCESS, payload: result.data });
      } catch (error) {
        dispatch({ type: LOGIN_FAIL });
        console.log(error);
      }
}