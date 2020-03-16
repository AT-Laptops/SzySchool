import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { loadUser } from './auth';

export const register = (email, password, history) => async dispatch => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ email, password });

    try {
        let result;
        result = await axios.post('/api/users', body, config);
        await dispatch({ type: REGISTER_SUCCESS, payload: result.data });
        await dispatch(loadUser());
        history.push('/home');
    } catch (error) {
        dispatch({ type: REGISTER_FAIL });
        console.log(error);
    }
}