import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

import PropTypes from 'prop-types';
import PostList from '../posts/post-feed';

const posts = ({ auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <div className='post-page'>
      <div className='post-intro'>
        <h1>Posts</h1>
        <h3>
          This is a place to connect, learn tips and advice from each other
          about being a great wife and mother, and to encourage each other{' '}
        </h3>
        <div className="Expections">
          <h3>Expectations:</h3>
           <p className="Expections">~ Be Kind and Courteous to One Another</p>
           <p className="Expections">~ No Swear Words in Posts or Comments</p>
           <p className="Expections">~ Keep the Atmosphere for Posts and Comments Peaceful and Uplifting</p> 
        </div>
        <h5>
          DISCLAIMER: Any posts or comments that are offensive and inappropriate
          will be deleted
        </h5>
      </div>
      <div>
        <h1>
          Want to share your thoughts or tips in being a wife and mother? Write
          a post!
        </h1>
      </div>
      <div>
        <Link to='/create-post'>Write a Post!</Link>
      </div>
      <div className='post-recent'>
        <h2> Posts:</h2>
        <PostList />
      </div>
    </div>
  );

  const guestLinks = (
    <div>
      <div className='post-page'>
        <div className='post-intro'>
          <h1>Posts</h1>
          <h3>
            This is a place to connect, learn tips and advice from each other
            about being a great wife and mother, and to encourage each other{' '}
          </h3>
          <h5>
            DISCLAIMER: Any posts or comments that are offensive and
            inappropriate will be deleted
          </h5>
        </div>
        <div className='post-auth'>
          <h3>Please sign-up or login to write posts or comment on posts.</h3>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Log In</Link>
        </div>
        <br />
        <div className='post-search'>
          Search through posts archive for a specific post:
          <div className='post-search-bar'>
            <br />
            <input type='text' className='input' placeholder='Search...' />
          </div>
        </div>
        <div className='post-recent'>
          <h2>Posts:</h2>
          <PostList />
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {!loading && (
        <Fragment> {isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

posts.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(posts);
