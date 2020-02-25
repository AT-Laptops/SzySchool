import { combineReducers } from 'redux';
import auth from './auth';
import reminder from './reminder';

export default combineReducers({
    reminder,
    auth,
});