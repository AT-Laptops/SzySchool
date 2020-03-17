import { SHOW_ADD_EVENT_POPUP } from './../actions/types';

const initialState = {
  addEventPopup:false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case SHOW_ADD_EVENT_POPUP:
      return {
        ...state,
        addEventPopup:payload
      }
    default:
      return state
  }
}
