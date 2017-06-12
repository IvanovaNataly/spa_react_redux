import React, { Component } from 'react';
import userService from './UserService';
import UserList from './UserList';
import UserPage from './UserPage';

import './main.scss';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            usersList: []
        };
        this.getUsers();
    }

    getUsers() {
        userService
            .getUsers()
            .then( this.changeListState.bind(this) )
    }

    changeListState(list) {
        this.setState ({
            usersList: list
        } ) 
    }

    updateUser(myId) {
        this.setState ({
            id: parseInt(myId.target.getAttribute("id"))
        } ) 
    }

    render() {
        return (
            <div>
                <UserList usersList={this.state.usersList} updateUser={this.updateUser.bind(this)}/>
                <UserPage id={this.state.id}/>
            </div>
        )
    }
}


