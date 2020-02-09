import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export class ProfileList extends Component {
    constructor(props) {
      super(props);
       this.state = {
           profile: [],
           users: []
    };
   }

  componentDidMount() {
    console.log("Test1")
    console.log(baseUrl)
    axios.get(`${baseUrl}/profile`)
    .then(res => this.setState({profile: res.data})
    )
  }
    
render() {
    return (
        <div className="profile">
          {this.state.profile.map(profile => (
            <div className="Profile-Card" key={profile._id}>
                  <h1>{profile.username}</h1>
                  <h3>{profile.location}</h3>
                <p>{profile.bio}</p>
                < br/>
            </div>
        ))
    }
        < br/>
        </div>
      );
  }
}
    

export default ProfileList;