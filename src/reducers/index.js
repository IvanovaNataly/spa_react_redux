import { combineReducers } from "redux";
import loggedInUserReducer from "./loggedInUserReducer";
import friendsReducer from "./friendsReducer";

export default combineReducers({
    loggedInUser: loggedInUserReducer,
    friends: friendsReducer  
})
