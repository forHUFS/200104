import {LOGIN_USER, REGISTER_USER} from "../_actions/types"
export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        register_success: action.payload,
      };
      break;
    case LOGIN_USER:
      return { ...state, login_success: action.payload };
      break;
    default:
      return state;
  }
}
