// import React, {Fragment, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getProfiles } from '../../actions/profile';

// const Profiles = ({ getProfiles, profile: {profile, loading } }) => {
//     useEffect(() => {
//         getProfiles();
//     }, [getProfiles]);

//     return (
//         <Fragment>
//             <h1>Users</h1>
//             <p>Checkout other user's bios and connect</p>
//             <div className="profiles">
//                 {profiles.length > 0 ? (
//                     profiles.map(profile => (
//                         <ProfileItem key={profile._id} profile={profile} />
//                     ))
//                 ) : ( 
//                     <h4>No profiles found...</h4>
//                 )}
//             </div>
//         </Fragment>
//     );
// };

// Profiles.propTypes = {
//     getProfiles: PropTypes.func.isRequired,
//     profile: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     profile: state.profile
// })

// export default connect(
//     mapStateToProps,
//     {getProfiles}
// )(Profiles);


import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import {getPost} from '../../actions/post'
// import {getProfileById} from '../../actions/profile'
const baseUrl = process.env.REACT_APP_BASE;

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
    axios.get(`http://localhost:5000/api/profile`)
    .then(res => this.setState({profile: res.data})
    )
    // .catch(error => console.log(error))
    // axios.get(`https://localhost:5000/api/post/${username}`)
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