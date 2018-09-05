import { SIMPLE_ACTION_FAIL, SIMPLE_ACTION_SUCCESS } from "../actions/actiontypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SIMPLE_ACTION_SUCCESS:
      return {
        actionType: action.type,
        result: action.payload
      };
    case SIMPLE_ACTION_FAIL:
      return {
        actionType: action.type,
        result: action.payload
      };
    default:
      return state;
  }
};
