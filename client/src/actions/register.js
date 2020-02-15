import axios from 'axios';

export const register = async (email, password, passwordRep) => {

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ email, password });

    try {
        let result;
        result = await axios.post('/api/users', body, config);
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}