import axios from 'axios';
import { todos } from './todos';

export const addTodo = (content, date) => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ content, date });

      try {
          let result = await axios.post('api/todos/add', body, config);
          dispatch(todos(date));
      } catch (error) {
          console.log(error);
      }
}