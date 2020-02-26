import { GET_DAY } from './types';
import axios from 'axios';

export const reminder = (selectedDay) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        let result;
        result = await axios.get('api/todos/mine');
        console.log(result);
        dispatch({ type: GET_DAY, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}