import {
    SET_DAY, GET_DAY
} from './../actions/types';

const initialDay = {
    day: new Date().getDate(),
    todos: [],
    isLoaded: false,
};

export default (state = initialDay, action) => {
    const {type, payload } = action;
    switch (type) {
        case SET_DAY: 
            return {
                ...state,
                day: payload,
                isLoaded: true,
            }
        case GET_DAY:
            return {
                ...state,
                ...payload,
                isLoaded: true,
            }
        default:
            return state;
    }
}