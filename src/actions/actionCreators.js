import * as ACTIONS from "./actions";

export function addUser(user) {
    return { type: ACTIONS.ADD_USER, user }
}

export function addAllUsers(userList) {
    return { type: ACTIONS.ADD_USERS_LIST, userList }
}

export function removeUser(user) {
    return { type: ACTIONS.REMOVE_USER, user }
}

export function selectUser(user) {
    return { type: ACTIONS.SELECT_USER, user }
}

export function getPosts(posts) {
    return { type: ACTIONS.GET_POSTS, posts }
}

export function login(user) {
    return { type: ACTIONS.LOG_IN, user }
}

export function logout() {
    return { type: ACTIONS.LOG_OUT }
}
