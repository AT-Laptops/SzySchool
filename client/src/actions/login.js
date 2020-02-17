import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = (email, password) => async dispatch => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
}