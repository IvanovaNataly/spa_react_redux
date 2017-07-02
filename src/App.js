import React, { Component } from 'react';
import UserList from './usersList/UserList';
import UserPage from './userPage/UserPage';
import { connect } from 'react-redux';

import './main.scss';

class App extends Component {


    render() {
        return (
            <div>
                <UserList/>
                <UserPage selectedUser={this.props.selectedUser.details} 
                            
                            />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedUser: state.friends.selectedUser
    }
}

export default connect(mapStateToProps, null)(App);
//selectedUserPosts={this.props.selectedUser.posts}

