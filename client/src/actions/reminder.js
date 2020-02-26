import { GET_DAY } from './types';

export const reminder = (selectedDay) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        let result;
        result = await axios.post('api/notes', selectedDay, config);
        dispatch({ type: GET_DAY, payload: result.data });
    } catch (error) {
        console.log(error);
    }
}