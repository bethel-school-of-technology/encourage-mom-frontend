import React, { Component } from "react";
import {deleteUser} from '../../actions/auth';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const baseUrl = process.env.REACT_APP_BASE_URL;

class userAdmin extends Component {
  onDeleteClick(id) {
    this.props.deleteUser(id);
  }
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
                       <button type="button" onClick={this.onDeleteClick.bind(this, user._id)}>Delete User</button>
              </div>
          ))
        }
          < br/>
          </div>
        );
    }
  }

  userAdmin.propType = {
    deletePost: PropTypes.func.isRequired
}
export default connect(null, {deleteUser})(userAdmin);