import {LOG_IN, LOG_OUT } from "../actions/actions";

export default function loggedInUserReducer(state = null, action) {
    switch(action.type) {
        case LOG_OUT:
            return null;
        case LOG_IN:
            return action.user;
    }
    return state;
}