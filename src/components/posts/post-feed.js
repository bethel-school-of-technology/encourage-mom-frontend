
import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE;

export class PostList extends Component {
    constructor(props) {
      super(props);
       this.state = {
           posts: []
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
        <div className="Posts">
          {this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <h5>{post.username}</h5>
                <p>{post.text}</p>
            </div>
        ))
    }
        </div>
      );
  }
}
    

export default PostList




// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux'
// import {getPosts} from '../../actions/post'

// const PostFeed = ({posts}) => {
//     useEffect(() => {
//         getPosts(posts)
//     }, [getPosts])
//     return(
//         <div>
//            {posts.map(post => {
//                 const {username, title, text} = post;
//                         return (
//                             <div>
//                                 <ul>
//                                     <li>
//                                         <div key={username}>
//                                             <h4>{title}</h4>
//                                             <p>{text}</p>
//                                         </div>
//                                     </li>
//                                     </ul>
//                                     </div>
//                                 );
//                             })
//                      }
//             </div>
// )}

// PostFeed.propTypes = {
//     posts: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
//     posts: state.post,
// });

// export default connect(mapStateToProps,
//     {getPosts})(PostFeed)

    
// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import PostItem from './postItem';
// import {getPosts} from '../../actions/post'

// class PostFeed extends Component {
//     componentDidMount(){
//         getPosts()
//     }

    

//     render(){
//         const { posts } = this.state;
//         return (
//             <div>
//                 {posts.map(post => {
//                             const {username, title, text} = post;
//                         return (
//                     <div>
//                         <ul>
//                             <li>
//                                 <div key={username}>
//                                     <h4>{title}</h4>
//                                     <p>{text}</p>
//                                 </div>
//                             </li>
//                             </ul>
//                             </div>
//                         );
//                      })
//                 // )}
//              }
//             </div>
//             )
//         }
//     }
// export default PostFeed


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import PostItem from './PostItem';
// import getPosts from '../../actions/post';

// const PostFeed = ({

// })

// export default PostFeed

// import React, {Component} from 'react';
// import {getPosts} from '../../actions/post';

// class PostList extends Component {
//     render() {
//         return (
//             <div>
//                 {getPosts.map((postDetail, index)=>{
//                     return <h1>
//                         {postDetail.title}
//                     </h1>
//                 })}
//             </div>
//         )
//     }
// }
// export default PostList





// import React from 'react';
// import PropTypes from 'prop-types';
// import PostItem from './postItem';
// import { getPosts } from '../../actions/post';

// const PostFeed = () =>
//  {
//      {
//         this.state = getPosts()
//             return (
//                 <div className="Posts">
//                   {this.state.posts.map(post => (
//                     <div key={post.username}>
//                         <h1>{post.title}</h1>
//                         <p>{post.text}</p>
//                     </div>
//                 ))
//             }
//                 </div>
//               );
    
//         }
//     }


// PostFeed.propTypes = {
//     posts: PropTypes.array.isRequired
// }

// export default PostFeed