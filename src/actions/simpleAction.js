import { getData } from "../utils/fetch";
import { SIMPLE_ACTION_SUCCESS, SIMPLE_ACTION_FAIL } from "./actiontypes";
export const simpleAction = () => dispatch => {
  getData(
    "https://api.github.com/users/quangtrung2503",
    res => {
      console.log("action success", res);
      dispatch({
        type: SIMPLE_ACTION_SUCCESS,
        payload: res
      });
    },
    err => {
      console.log("action error", err);
      dispatch({
        type: SIMPLE_ACTION_FAIL,
        payload: err
      });
    }
  );
};
