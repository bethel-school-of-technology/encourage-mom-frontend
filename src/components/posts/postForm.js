import React , { Fragment } from 'react';
import { connect } from 'react-redux'
import { createPost } from '../../actions/post'


const postForm = () => {
    const [postData, setPostData] =  ({
        username: '',
        title: '',
        postText: ''
    });

    const {username, title, postText } = postData
    
    const onChange = e =>
        setPostData({ ...postData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createPost(postData)
    };

    return (
        <Fragment>
            <h1>Share your thoughts and tips and by writing a post</h1>
            <div className="form">
                <form className="posts-from"
                    onSubmit={e => onSubmit(e)}>
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => onChange(e)}
                        required />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => onChange(e)}
                        required />
                    <textarea 
                        type="text"
                        name="text"
                        value={postText}
                        onChange={e => onChange(e)}
                        />
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="createPost"
                        />
                </form>
            </div>
        </Fragment>
    )
}

export default connect(
    null,
    {createPost}
 )(postForm)



