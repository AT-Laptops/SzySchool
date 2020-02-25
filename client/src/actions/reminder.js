import { SET_DAY } from './types';

export const reminder = (selectedDay) => async dispatch => {
    dispatch({ type: SET_DAY, value: selectedDay});
}