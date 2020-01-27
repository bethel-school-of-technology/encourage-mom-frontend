// import React from 'react';
// import { editProfile } from '../../actions/profile';
// // import {}


// const EditProfile = ({
//     createProfile,
//     getCurrentProfile
// }) => {
//     const [profileData, setProfileData] = useState({
//         name: '',
//         username: '',
//         location: '',
//         bio:''
//     });



//     const {name, username, location, bio } = profileData
    
//     const onChange = e =>
//         setprofileInfo({ ...profileData, [e.target.name]: e.target.value});

//     const onSubmit = e => {
//         e.preventDefault();
//         createProfile(profileData, history)
//     };

//     return (
//         <Fragment>
//             <h1>Edid Your Profile</h1>
//             <form className="form" onSubmit={e => onSubmit(e)}>
//                 <div className="create-profile-form">
//                 <input
//                     type="text"
//                     name="name"
//                     value={name}
//                     onChange={e => onChange(e)}
//                     required
//                     />
//                 <input 
//                     type="text"
//                     name="username"
//                     value={username}
//                     onChange={e => onChange(e)}
//                     required
//                     />
//                 <input 
//                     type="text"
//                     name="location"
//                     value={location}
//                     onChange={e => onChange(e)}
//                     required 
//                     />
//                 <textarea
//                     type="text"
//                     name="bio"
//                     value={bio}
//                     onChange={e => onChange(e)}
//                     required
//                     />
//                 </div>
//             </form>
//         </Fragment>
//     )
// }

// export default EditProfile

// import React, {Component} from 'react';
//     import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
// import {editProfile, getCurrentProfile} from '../../actions/profile'
// import { withRouter } from 'react-router-dom';

// class EditProfile extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             username: '',
//             location: '',
//             bio: '',
//             errs:'',
//         }
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     // componentDidMount() {
//     //     this.props.getCurrentProfile(profileData, this.props.history)
//     // }

//     componentWillReceiveProps(nextProps){
//         if(nextProps.errors) {
//             this.setState({errs: nextProps.errs})
//         }
//     }

//     onSubmit(e) {
//         e.preventDefault();
//         const profileData = {
//             firstName: this.state.firstName,
//             lastName: this.state.lastName,
//             username: this.state.username,
//             location: this.state.location,
//             bio: this.state.bio,
//         };

//         this.props.createProfile(profileData, this.props.history);
//     }

//     onChange(e){
//         this.setState({[e.target.name]: e.target.value})
//     }

//     render() {
//         return(
//         <div>
//             <h1>Edit Your Profile</h1>
//             <br/>
//             <form className="form" onSubmit={this.onSubmit}>
//                 <div className="edit-profile-form">
//             <div>
//                 First Name:
//                 <input
//                     type="text"
//                     name="firstName"
//                     value={this.state.firstName}
//                     onChange={this.onChange}
//                     required
//                     />
//             </div>
//             <br/>
//             <div>
//             Last Name:
//                 <input
//                     type="text"
//                     name="lastName"
//                     value={this.state.lastName}
//                     onChange={this.onChange}
//                     required
//                     />
//             </div>
//             <br/>
//             <div>Username: 
//                 <input 
//                     type="text"
//                     name="username"
//                     value={this.state.username}
//                     onChange={this.onChange}
//                     required
//                     />
//             </div>
//             <br/>
//             <div>Loaction (if you want): 
//                 <input 
//                     type="text"
//                     name="location"
//                     value={this.state.location}
//                     onChange={this.onChange}
//                     required 
//                     />
//                 </div>
//                 <br/>
//             <div> Bio:
//                 <textarea
//                     type="text"
//                     name="bio"
//                     value={this.state.bio}
//                     onChange={this.onChange}
//                     required
//                     />
//             </div>
//             <br/>
//                 <input 
//                     type='submit'
//                     value="Submit"
//                     />
//                 </div>
//             </form>
//             </div>
//         )
//     }
// }

// EditProfile.propTypes = {
//     profile: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired,
//     createProfile: PropTypes.func.isRequired,
//     getCurrentProfile: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//     profile: state.profile,
//     errors: state.errors
// })

// export default connect(
//     mapStateToProps,
//     {editProfile, getCurrentProfile})
//     (withRouter(EditProfile));

