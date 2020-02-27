import { GET_DAY } from './types';
import axios from 'axios';

export const reminder = (date) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({date});

    try {
        let result;
        result = await axios.post('api/todos', config, date);
        dispatch({ type: GET_DAY, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}