import { TODO_STATE } from './types';
import axios from 'axios';

export const setTodo = (todo) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({isDone: !todo.isDone});

    try {
        let result;
        result = await axios.post(`api/todos/${todo._id}/changedone`, body, config);
        dispatch({ type: TODO_STATE, payload: todo._id });
    } catch (error) {   
        console.log(error);
    }

}