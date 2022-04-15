import { combineReducers } from "redux";
import * as CONSTANT from "./constants";

const userState = {
  _id: undefined,
  username: undefined,
  email: undefined,
  bookmark: [],
};

const reducerUser = (state = userState, action) => {
  switch (action.type) {
    case CONSTANT.LOGIN: {
      let copy = { ...state };
      copy = action.payload;
      return copy;
    }
    case CONSTANT.UPDATE_BOOKMARK: {
      let copy = { ...state };
      copy.bookmark = action.payload.bookmark;
      return copy;
    }
    case CONSTANT.LOGOUT: {
      return userState;
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  reducerUser,
});

export default reducers;
