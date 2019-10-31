import { handleActions } from "redux-actions";
import { demoTypes } from "./demoAction";
import moment from "moment";
import { Map, fromJS, merge } from "immutable";

const initState = fromJS({
  content: ""
});

const demoReducer = handleActions(
  {
    [demoTypes.SAY_HI_SUCCESS]: (state, action) => {
      return state.merge({
        content: action.content
      });
    }
  },
  initState
);

export default demoReducer;
