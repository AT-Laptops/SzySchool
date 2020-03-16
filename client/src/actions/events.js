import { GET_EVENTS } from './types';
import axios from 'axios';

export const events = (date) => async dispatch => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    const body = JSON.stringify({date});
    
    try {
        let result;
        result = await axios.get('api/events/mine', body, config);
        dispatch({ type: GET_EVENTS, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}