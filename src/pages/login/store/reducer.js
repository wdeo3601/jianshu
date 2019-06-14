import {fromJS} from "immutable";
import * as constants from './constants'

const defaultState = fromJS({
  login: false
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.merge({
        login: fromJS(action.login)
      });
    case constants.LOGOUT:
      return state.merge({
        login: fromJS(action.login)
      });
    default:
      return state;
  }
}