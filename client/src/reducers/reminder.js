import {
    SET_DAY, GET_DAY
} from './../actions/types';

const initialDay = {
    date: new Date(),
    todos: [],
    isLoaded: false,
};

export default (state = initialDay, action) => {
    const {type, payload } = action;
    switch (type) {
        case SET_DAY: 
            return {
                ...state,
                date: payload,
                isLoaded: true,
            }
        case GET_DAY:
            return {
                ...state,
                todos: payload,
                isLoaded: true,
            }
        default:
            return state;
    }
}