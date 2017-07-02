import React, { Component } from 'react';
import userService from '../services/UserService';
import { connect } from 'react-redux';
import { addAllUsers, selectUser} from '../actions/actionCreators';

import "./users-list.scss";

class UserList extends Component {
    constructor() {
        super();
        this.getAllUsers();
    }

    getAllUsers() {
        userService
            .getUsers()
            .then( this.onAllUsers.bind(this) )
    }

    onAllUsers(list) {
        this.props.addAllUsers(list);
    }

    renderUser(user) {
        let item = <li key={user.id} id={user.id} onClick={ () => this.userSelected(user) }> {user.name} </li>
        return item;
    }

    userSelected(user) {
        this.props.onUserSelected(user);
    }

    render() {
        return(
            <nav className="users-list">
                <h3>Users List </h3>
                <ul>
                    { this.props.usersList.map( this.renderUser.bind(this) ) }
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        usersList: state.friends.usersList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAllUsers: (list) => dispatch(addAllUsers(list)),
        onUserSelected: (user) => dispatch(selectUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)