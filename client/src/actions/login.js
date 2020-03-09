import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import { EditorPropTypes } from '@tinymce/tinymce-react/lib/cjs/main/ts/components/EditorPropTypes';

export const login = (email, password, history) => async dispatch => {

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
        history.push('/');
      } catch (error) {
        dispatch({ type: LOGIN_FAIL });
        console.log(error);
      }
}