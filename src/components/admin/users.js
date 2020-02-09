import React, { Component } from "react";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

class userAdmin extends Component {
    constructor(props) {
        super(props);
         this.state = {
             users: []
      };
     }
  
    componentDidMount() {
      axios.get(`${baseUrl}/users`)
      .then(res => this.setState({users: res.data})
      )

    }
      
  render() {
      return (
        <div>
        <h1 className="admin">User Admin Page</h1>
        <a className="admin-a" href='/auth-landing'>Back to Admin Home Page</a>
            {this.state.users.map(user => (
              <div className="admin-profile-card" key={user._id}>
                       <h3>{user.firstName} {user.lastName}</h3>
                       <h5>{user.date}</h5>
              </div>
          ))
        }
          < br/>
          </div>
        );
    }
  }

export default userAdmin;