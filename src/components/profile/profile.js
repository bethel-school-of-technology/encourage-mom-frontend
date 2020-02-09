import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

export class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			profile: [],
			users: []
		};
	}

	componentDidMount() {
		console.log('Test1');
		axios
			.get(`${baseUrl}/profile/me`)
			.then((res) => this.setState({ profile: res.data }))
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div className="posts">
				<div className="myProfile-Card" key={this.state.profile._id}>
					<h1>Welcome! {this.state.profile.username}!!!!!</h1>
					<h3>{this.state.profile.location}</h3>
					<p>{this.state.profile.bio}</p>
					<br />
				</div>
				<p>Want to Edit Profile?</p>

				<Link to="/edit-profile">Edit Profile</Link>
				<br />
				<p>No profile? Create One!</p>

				<Link to="/create-profile">Create profile</Link>
				<br />
			</div>
		);
		// eslint-disable-next-line
	}
}

export default Profile;
=======
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';

import {Link} from 'react-router-dom';

 class Profile extends Component {

  componentDidMount() {
    this.props.getCurrentProfile()
  }
    
render() {

  const { user } = this.props.auth;
  // const {profile} = this.props.profile

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
>>>>>>> dev
