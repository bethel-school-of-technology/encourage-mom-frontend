import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from '../../actions/post';

const createComment = ({postId, addComment}) => {
    const[text, setText] = useState('');
    return(
        <div className="form">
            <form className="posts-form"
                    onSubmit={e => {e.preventDefault();
                    addComment(postId, {username, title, text});
                    setText('');                    
                    }}
                    >
                <div>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required />
                </div>
                <br />
                <div> Comment Title: 
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required />
                </div>
                <br/>
                <div>
                    Comment Content:
                    <textarea 
                        type="text"
                        name="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                        />
                </div>
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="addComment"
                        />                
                </form>
            </div> 
            
            


    )
}

createComment.PropTypes ={
    addComment: PropTypes.func.isRequired

}

export default connect(null, {addComment})(createComment);
