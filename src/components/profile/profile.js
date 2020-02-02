import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE;

export class Profile extends Component {
    constructor(props) {
      super(props);
       this.state = {
           profile: [],
           users: []
    };
   }

  componentDidMount() {
    console.log("Test1")
    // console.log(baseUrl)
    axios.get(`${baseUrl}/profile/me`)
    .then(res => this.setState({profile: res.data})
    )
    .catch(error => console.log(error))
  }
    
render() {
    return (
        <div className="posts">

          
            <div className="myProfile-Card" 
            key={this.state.profile._id}
            >
                <h1>Welcome! {this.state.profile.username}!!!!!</h1>
                <h3>{this.state.profile.location}</h3>
                <p>{this.state.profile.bio}</p>
                < br/>
            </div>
            <p>Want to Edit Profile?</p>
            <Link to="/edit-profile">Edit Profile</Link>
            <br/>
            <p>No profile? Create One!</p>
            <Link to ="/create-profile">Create profile</Link>
        < br/>
        </div>
      );
  }
}
    

export default Profile