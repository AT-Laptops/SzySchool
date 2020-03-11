import { SHOW_ADD_EVENT_POPUP, SHOW_ADD_TODO_POPUP } from './types';

export const showAddEventPopup = (status) => async dispatch => {
  console.log('dupa')
  await dispatch({ type: SHOW_ADD_EVENT_POPUP });
}

export const showAddTodoPopup = (status) => async dispatch => {
  await dispatch({ type: SHOW_ADD_TODO_POPUP });
}