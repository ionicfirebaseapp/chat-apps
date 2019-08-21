import { combineReducers } from "redux";
import UserReducer from './user-redux';

const rootReducer = combineReducers({
    user: UserReducer
});

export default rootReducer;