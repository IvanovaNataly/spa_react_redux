import React, { Component } from 'react';

import "./users-list.scss";

export default class UserList extends Component {
    constructor(props) {
        super(props);
    }

    renderUser(user) {
        let item = <li key={user.id} id={user.id} onClick={ this.props.updateUser.bind(this) }> {user.name} </li>
        return item;
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