import { todos } from './todos';
import axios from 'axios';

export const changeTodoStatus = (todo, date) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({isDone: !todo.isDone});

    try {
        await axios.post(`api/todos/${todo._id}/changedone`, body, config);
        dispatch(todos(date));
    } catch (error) {   
        console.log(error);
    }
}