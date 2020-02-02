import React , { useState } from 'react';
import { connect } from 'react-redux'
import { createPost } from '../../actions/post'
import PropTypes from 'prop-types'
import {addLike, removeLike} from '../..actions/post';


const CreatePost = ({ createPost }) => {
    addLike,
    removeLike
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
                <div>
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
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="createPost"
                        />

                <button onClick ={e => addLike(_id)} type = 'button' class= 'btn btn-light'>
                    <i class = 'fas fa-thumps-up'/> {''}
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>

                <button onClick ={e => removeLike(_id)} type = 'button' class= 'btn btn-light'>
                    <i class = 'fas fa-thumps-down'/> {''}
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
                </form>
            </div> 
            
            

                
        
                    
        )
    
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
}

export default connect(null, {createPost}, {addLike, removeLike})(CreatePost)

