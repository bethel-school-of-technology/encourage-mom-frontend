// lists all posts with delete functions

import React, { Component } from "react";
import axios from 'axios';

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
    console.log("Test1")
    console.log(baseUrl)
    axios.get(`http://localhost:5000/api/posts`)
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
                        <h1>{post.title}</h1>
                        <h3>{post.username}</h3>
                        <p>{post.text}</p>
                        <button>Delete Post</button>
                        {/* <a>Delete Post</a> */}
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

export default postAdmin;