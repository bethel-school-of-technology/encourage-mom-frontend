import React, {Fragment, useState} from 'react';
import { editProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {}


const EditProfile = ({
    createProfile,
    setProfileInfo
}) => {
    const [profileData] = useState({
        location: '',
        bio:''
    });

    const { location, bio } = profileData
    
    const onChange = e =>
        setProfileInfo({ ...profileData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(profileData
            )
    };

    return (
        <Fragment>
            <h1>Edit Profile Info</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="create-profile-form">

            <div> Location:
                <input 
                    type="text"
                    name="location"
                    value={location}
                    onChange={e => onChange(e)}
                    required 
                    />
            </div>
            < br/>
            <div> Short Bio:
                <textarea
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>
            </div>
            < br />
            <a href='/profile'>Back to profile</a>
            </form>
        </Fragment>
    )
}

EditProfile.propTypes = {
    editProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {editProfile})(EditProfile)

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

