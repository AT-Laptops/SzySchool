import {
    SET_DAY, 
    GET_DAY,
    GET_TODOS,
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
        case GET_DAY:
            return {
                ...state,
                todos: payload,
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