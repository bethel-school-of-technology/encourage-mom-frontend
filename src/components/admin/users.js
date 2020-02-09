// lists all users with delete functions
<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> dev
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE;

class userAdmin extends Component {
<<<<<<< HEAD
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		console.log('Test1');
		console.log(baseUrl);
		axios.get(`http://localhost:5000/api/users`).then((res) => this.setState({ users: res.data }));
	}

	render() {
		return (
			<div>
				<h1 className="admin">User Admin Page</h1>
				<a className="admin-a" href="/auth-landing">
					Back to Admin Home Page
				</a>

				{/* <div className="profile"> */}
				{this.state.users.map((user) => (
					<div className="admin-profile-card" key={user._id}>
						<h3>
							{user.firstName} {user.lastName}
						</h3>
						<button>Delete User</button>
						<br />
						<br />
					</div>
				))}
				<br />
				{/* </div> */}
			</div>
		);
	}
}

export default userAdmin;
=======
    constructor(props) {
        super(props);
         this.state = {
             users: []
      };
     }
  
    componentDidMount() {
      console.log("Test1")
      console.log(baseUrl)
      axios.get(`http://localhost:5000/api/users`)
      .then(res => this.setState({users: res.data})
      )

    }
      
  render() {
      return (
        <div>
        <h1 className="admin">User Admin Page</h1>
        <a className="admin-a" href='/auth-landing'>Back to Admin Home Page</a>
        
          {/* <div className="profile"> */}
            {this.state.users.map(user => (
              <div className="admin-profile-card" key={user._id}>
                       <h3>{user.firstName} {user.lastName}</h3>
                       <h5>{user.date}</h5>
                       {/* <button>Delete User</button> */}

              </div>
          ))
        }
          < br/>
          {/* </div> */}
          </div>
        );
    }
  }


export default userAdmin;
>>>>>>> dev
