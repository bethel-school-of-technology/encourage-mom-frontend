import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Profile extends Component {

render() {

  const { user } = this.props.auth;

  if(user.isAdmin === true) {
    console.log("Admin Access")
    return <Redirect to='/auth-landing'></Redirect>
}

  return (
      <div className="profile">
  <br/>
    <div className="myProfile-Card" >
      <br/>
      <h1>Welcome, {user.firstName} {user.lastName}!!!</h1>
      < br/>
      </div>
      <br/>
      <br/>
      <p>Want to Create a Profile!</p>
      <Link to ="/create-profile">Create profile</Link>
      <p>Want to Edit Profile?</p>
      <Link to = "/edit-profile">Edit Profile</Link>
      <br/>

  < br/>
  </div>
);
}
}
Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})



    

export default connect(mapStateToProps, { getCurrentProfile})(Profile);
