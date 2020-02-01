
import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import {getPost} from '../../actions/post'
// import {getProfileById} from '../../actions/profile'
const baseUrl = process.env.REACT_APP_BASE;

export class PostList extends Component {
    constructor(props) {
      super(props);
       this.state = {
           posts: [],
           users: []
    };
   }

  componentDidMount() {
    console.log("Test1")
    console.log(baseUrl)
    axios.get(`http://localhost:5000/api/posts`)
    .then(res => this.setState({posts: res.data})
    )
    .catch(error => console.log(error))
  }
    
render() {
    return (
        <div className="posts">
          {this.state.posts.map(post => (
            <div className="Posts-Card" key={post._id}>
                <h1>{post.title}</h1>
                <h3>{post.username}</h3>
                <p>{post.text}</p>
                < br/>
            </div>
        ))
    }
        < br/>
        </div>
      );
  }
}
    

export default PostList