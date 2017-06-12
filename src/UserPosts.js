import React, { Component } from 'react';

function appendPosts(post, index) {
    return (
        <dl key={index}>
            <dt>{ post.title }</dt>
            <dd>{ post.body }</dd>
        </dl>
    )
}

export default class UserPosts extends Component {
    render() {
        if (!this.props.posts) { return (<article> "No posts represented"</article>) }

        return (
            <article>
                { this.props.posts.map( appendPosts ) }
            </article>
        )
    }
}