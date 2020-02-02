// lists all posts with delete functions

import React, { Component } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import {deletePost} from '../../actions/post'
import { connect } from "react-redux";

const baseUrl = process.env.REACT_APP_BASE;

class postAdmin extends Component {
    constructor(props) {
      super(props);
       this.state = {
           posts: [],
           users: []
    };
   }

  componentDidMount() {
    // console.log("Test1")
    axios.get(`${baseUrl}/posts`)
    .then(res => this.setState({posts: res.data})
    )
    .catch(error => console.log(error))
  }
    
  onDeleteClick(id) {
    this.props.deletePost(id);
    console.log("test3")
}
render() {
    return (

        <div>
            <h1 className="admin">Admin Post Page</h1>
            <a className="admin-a" href='/auth-landing'>Back to Admin Home Page</a>
            <div className="posts">
                {this.state.posts.map(post => (
                    <div className="Posts-Card" key={post._id}>
                        <h1>{post.title}</h1>
                        <h3>{post.username}</h3>
                        <p>{post.text}</p>
                        <button type="button" onClick={this.onDeleteClick.bind(this, post._id)}>Delete Post</button>
                        < br/>
                        < br/>
                    </div>
                    ))
                    }   
                < br/>
            </div>
        </div>
            
        );
    }
}

postAdmin.propType = {
    deletePost: PropTypes.func.isRequired
}


export default connect(null,{deletePost})(postAdmin);