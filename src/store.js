import { createStore } from "redux";
import appReducer from "./reducers";

const state = {
    loggedInUser: null,
    friends: {
        selectedUser: {},
        usersList: []
    }
}

export default createStore(
    appReducer, 
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );