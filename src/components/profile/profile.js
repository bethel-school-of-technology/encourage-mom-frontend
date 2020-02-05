import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import {Link} from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

export class Profile extends Component {
    constructor(props) {
      super(props);
       this.state = {
           users: []
    };
   }

  componentDidMount() {
  //   console.log("Test1");
  //   // console.log(this.state.users);
  //   axios.post(`${baseUrl}/profile/me`, {"username": "wanda.baer" })
  //   .then(res => this.setState({profile: res.data})
  //   )
  //   .catch(error => console.log(error))
  // }
  console.log("Test1");
  axios.get(`${baseUrl}/users/me`)
  .then(res => this.setState({users: res.data})
  )
  .catch(error => console.log(error))
  console.log("Success!")
  }
    
render() {
    return (
      <div className="profile">
  
    <div className="myProfile-Card" 
      key={this.state.users._id}>
      <h1>Welcome! {this.state.users.firstName} {this.state.users.lastName}!!!!!</h1>
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


      //   <div className="posts">
      //       <div className="myProfile-Card" 
      //       key={this.state.profile._id}>
      //           <h1>Welcome! {this.state.profile.username}!!!!!</h1>
      //           <h3>{this.state.profile.location}</h3>
      //           <p>{this.state.profile.bio}</p>
      //           < br/>
      //       </div>
      //       <p>Want to Edit Profile?</p>

      //       <Link to = "/edit-profile">Edit Profile</Link>
      //       <br/>
      //       <p>No profile? Create One!</p>

      //       <Link to ="/create-profile">Create profile</Link>
      //   < br/>
      //   </div>
      // );
       // eslint-disable-next-line 
  }
}
    

export default Profile