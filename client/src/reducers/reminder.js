import {
    SET_DAY, 
    GET_TODOS,
    GET_EVENTS,
} from './../actions/types';

const initialDay = {
    date: new Date(),
    todos: [],
    events: [],
};

export default (state = initialDay, action) => {
    const {type, payload } = action;
    switch (type) {
        case SET_DAY: 
            return {
                ...state,
                date: payload,
            }
        case GET_EVENTS:
            return {
                ...state,
                events: payload,
            }
        case GET_TODOS:
            return {
                ...state,
                todos: payload,
            }
        default:
            return state;
    }
}