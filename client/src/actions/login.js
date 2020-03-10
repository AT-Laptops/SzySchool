import axios from 'axios';
import { loadUser } from './auth';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

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
        console.log(result);
        await dispatch({ type: LOGIN_SUCCESS, payload: result.data });
        await dispatch(loadUser());
        history.push('/');
      } catch (error) {
        dispatch({ type: LOGIN_FAIL });
        console.log(error);
      }
}

// to nie działa tak jak powinno bo w payloadzie mam tylko token, dopiero jak odświerzę strone to mi pobiera dane na podstawie tokena
// więc albo coś z tym logowaniem co przepisywałem
// albo trzeba tutaj jeszcze zrobić jakiegoś disptacha