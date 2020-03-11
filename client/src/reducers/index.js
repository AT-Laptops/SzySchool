import { combineReducers } from 'redux';
import auth from './auth';
import reminder from './reminder';
import popups from './popups';

export default combineReducers({
    reminder,
    auth,
    popups
});