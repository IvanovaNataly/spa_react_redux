import React, { Component } from 'react';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import userService from './UserService';
import postService from './PostService';

import "./user-page.scss";

export default class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            posts: []
        }
        this.getUser(this.props.id);
        this.getUserPosts(this.props.id);
    }

    getUser(id) {
        userService
            .getUser(id)
            .then( this.updateState.bind(this) )
    }

    updateState(myUser) {
        this.setState ({
            user: myUser
        })
    }

    getUserPosts(id) {
        postService
            .getPosts(id)
            .then( this.updatePostsState.bind(this) )
    }

    updatePostsState(myPosts) {
        this.setState ({
            posts: myPosts
        })
    }

    componentWillReceiveProps(nextProps) {
        this.getUser(nextProps.id);
        this.getUserPosts(nextProps.id);
    }

    render() {
        return (
            <main className="user-page">
                <UserDetails user={this.state.user}/>
                <UserPosts posts={this.state.posts}/>
            </main>
        )
    }
}
