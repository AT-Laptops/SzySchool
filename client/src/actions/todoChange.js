import axios from 'axios';
import { todos } from './todos';

export const todoChange = (todo, date) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify(todo);

    try {
        let result;
        result = await axios.post(`api/todos/${todo._id}`, body, config);
        dispatch(todos(date));
    } catch (error) {
        console.log(error);
    }
}
