import {
    SET_DAY
} from './../actions/types';

const initialDay = {
    day: new Date().getDate(),
    todos: null,
    tests: null,
    isLoaded: false,
}

export default (state = initialDay, action) => {
    const {type, value } = action;
    switch (type) {
        case SET_DAY: 
            return {
                ...day,
                state: value,
                isLoaded: true,
            }
        default:
            return state;
    }
}