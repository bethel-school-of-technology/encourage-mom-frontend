import React, { Component } from 'react';

class AuthLanding extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome, Admin!</h1>
          <h3>
            As an admin user, you are able to delete unused accounts, delete
            inappropriate posts, add encouragement.
          </h3>
        </div>
        <nav className='admin-links'>
          <ul className='admin'>
          <h1 className="Admin">Admin Links:</h1>
            <a href='/admin-users'> View Users</a>
            <br />
            <br />
            <a href='/admin-profiles'> View Profiles</a>
            <br />
            <br />
            <a href='/admin-messages'> View and Manage Messages</a>
            <br />
            <br />
            <a href='/admin-posts'>View and Manage Posts</a>
            <br />
            <br />
            <a href='/admin-encouragement'>Create Encouragement</a>
            <br />
          </ul>
        </nav>
      </div>
    );
  }
}

export default AuthLanding;
