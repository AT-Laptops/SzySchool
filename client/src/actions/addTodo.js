import axios from 'axios';
import { todos } from './todos';

export const addTodo = (title, date) => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ title, date });

      try {
          await axios.post('api/todos/add', body, config);
          dispatch(todos(date));
      } catch (error) {
          console.log(error);
      }
}