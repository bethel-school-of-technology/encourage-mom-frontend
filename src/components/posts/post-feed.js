import React from 'react';
import { render } from '@testing-library/react';

const PostFeed = ({getPosts, post: {posts, loading}}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return(
        <div>
            
        </div>
    )
}

export default PostFeed;