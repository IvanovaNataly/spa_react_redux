import { combineReducers } from "redux";
import {SELECT_USER, GET_POSTS, ADD_USER, ADD_USERS_LIST, REMOVE_USER} from "../actions/actions";

function usersListReducer(state =[], action) {
    switch(action.type) {
        case ADD_USER:
            return [...state, action.user];
        case ADD_USERS_LIST:
            return action.userList;
        case REMOVE_USER:
            return state.filter(user => user != action.user);

    }
    return state;
}

function selectedUserReducer(state = null, action) {
    switch(action.type) {
        case SELECT_USER:
            return { details: action.user,
                    posts: state.posts };
        case GET_POSTS:
            return { details: state.details,
                    posts: action.posts };
        case REMOVE_USER:
            return state == action.user? null : state;
    }
    return state;
}

export default combineReducers({
    usersList: usersListReducer, 
    selectedUser: selectedUserReducer
})