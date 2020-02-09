import React , { useState } from 'react';
import { connect } from 'react-redux'
import { createPost } from '../../actions/post'
import PropTypes from 'prop-types'
import {addLike, removeLike} from '../..actions/post';

const CreatePost = ({ createPost }) => {
    const [ username, setUsername] = useState('')
    const [ text, setText ] = useState('');
    const [ title, setTitle ] = useState('');


    return(
        <div className="form">
            <form className="posts-form"
                    onSubmit={e => {e.preventDefault();
                    createPost({username, title, text});
                    setText('');
                    setTitle('');
                    }}
                    >
                <br/>
                <br/>
                <div> Username: 
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required />
                </div>
                <br />
                <div> Post Title: 
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required />
                </div>
                <br/>
                <div>
                    Post Content:
                    <textarea 
                        type="text"
                        name="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                        />
                </div>
                <br/>
                <br/>
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="Create Post"
                        />
                </form>
            </div>
    )
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, {createPost}, {addLike, removeLike})(CreatePost)

