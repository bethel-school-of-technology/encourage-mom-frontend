import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE;

export class profileAdmin extends Component {
    constructor(props) {
      super(props);
       this.state = {
           profile: [],
           users:[]
    };
   }

  componentDidMount() {
    console.log("Test1")
    console.log(baseUrl)
    axios.get(`http://localhost:5000/api/profile`)
    .then(res => this.setState({profile: res.data})
    )
  }
    
render() {
    return (
        <div className="profile">
          {this.state.profile.map(profile => (
            <div className="Profile-Card" key={profile._id}>
                <h3>{profile.username}</h3>
                <h3>{profile.location}</h3>
                <p>{profile.bio}</p>
                <button>Delete Profile</button>
                < br/>
            </div>
        ))
    }
        < br/>
        </div>
      );
    }
}   

export default profileAdmin