import React, { Component } from 'react';
import axios from 'axios';
import {deleteProfile} from '../../actions/profile'

const baseUrl = process.env.REACT_APP_BASE_URL;

export class profileAdmin extends Component {
    constructor(props) {
      super(props);
       this.state = {
           profile: [],
    };
   }

  componentDidMount() {
    console.log("Test1")
    console.log(baseUrl)
    axios.get(`${baseUrl}/profile`)
    .then(res => this.setState({profile: res.data})
    )
    axios.delete(`${baseUrl}/profile`)
    .then(res => this.deleteProfile({profile: res.data}))

  }
    
render() {
    return (
        <div className="profile">
          {this.state.profile.map(profile => (
            <div className="Profile-Card" key={profile._id}>
                <h3>{profile.username}</h3>
                <h3>{profile.location}</h3>
                <p>{profile.bio}</p>
                <br/>
            </div>
        ))
    }
        < br/>
        </div>
      );
    }
}   

export default profileAdmin