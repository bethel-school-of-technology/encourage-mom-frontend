import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Posts extends Component {
    handleChange(e) {
        const currentPostList = []
        const newPostList = [];

        if (e.target.value !== "") {
            currentPostList = this.props.items;

        newPostList = currentPostList.filter(item => {
            const lc = item.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lc.includes(filter)
        });
        } else {
        newPostList = this.props.items;
        }
        
        this.setState({
            filtered: newPostList
        });
        this.handleChange = this.handleChange.bind(this);
    }

    

    render() {
        return (
            <div className="post-page">
            <div className="post-intro">
                <h1>Posts</h1>
                <h3>This is a place to connect, learn tips and advice from each other about being a great wife and mother, and to encourage each other </h3>
                <h5>DISCLAIMER: Any posts or comments that are offensive and inappropiate will be deleted</h5>
            </div>
            <div className="post-auth">
                <h3>Please sign-up or login to write posts or comment on posts.</h3>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Log In</Link>
            </div>
            <br />
            <div className="post-search">
               Search through posts archive for a specific post:
               <div className="post-search-bar">
                < br/>
                <input 
                    type="text"
                    className="input"
                    onChange={this.handleChange}
                    placeholder="Search..." />
            </div>
            </div>
            <div className="post-recent">
                <h2>Most Recent:</h2>
            </div>
            </div>
        );
    }
}

export default Posts;