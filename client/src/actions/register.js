import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const register = (email, password) => async dispatch => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ email, password });

    try {
        let result;
        result = await axios.post('/api/users', body, config);
        dispatch({ type: REGISTER_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: REGISTER_FAIL });
        console.log(error);
    }
}