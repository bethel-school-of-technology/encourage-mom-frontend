import React, { Component } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import {deletePost} from '../../actions/post'
import { connect } from "react-redux";

const baseUrl = process.env.REACT_APP_BASE_URL;

class postAdmin extends Component {
    onDeleteClick(id) {
        this.props.deletePost(id);
      }
    constructor(props) {
      super(props);
       this.state = {
           posts: [],
           users: []
    };
   }

  componentDidMount() {

    axios.get(`${baseUrl}/posts`)
    .then(res => this.setState({posts: res.data})
    )
    .catch(error => console.log(error))
  }

render() {
    return (

        <div>
            <h1 className="admin">Admin Post Page</h1>
            <a className="admin-a" href='/auth-landing'>Back to Admin Home Page</a>
            <div className="posts">
                {this.state.posts.map(post => (
                    <div className="Posts-Card" key={post._id}>
                        <h2>{post.title}</h2>
                        <h4>{post.username}</h4>
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