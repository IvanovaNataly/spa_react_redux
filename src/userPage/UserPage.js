import React, { Component } from 'react';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import postService from '../services/PostService';
import { connect } from 'react-redux';
import { getPosts } from '../actions/actionCreators';

import "./user-page.scss";

class UserPage extends Component {

    componentWillReceiveProps(nextProps) {
        if(this.props.selectedUser != nextProps.selectedUser)
        this.getUserPosts(nextProps.selectedUser.id)
    }

    getUserPosts(id) {
        postService
            .getPosts(id)
            .then( this.onUserPosts.bind(this) )
    }

    onUserPosts(posts) {
        this.props.onGetPosts( posts );
    }

    render() {
        return (
            <main className="user-page">
                <UserDetails user={this.props.selectedUser}/>
                <UserPosts posts={this.props.posts}/>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.friends.selectedUser.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onGetPosts: (posts) => dispatch(getPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

