import React, {Component} from 'react';
    import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {createProfile} from '../../actions/profile'
import { withRouter } from 'react-router-dom';

class CreateProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            location: '',
            bio: '',
            errs:'',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors) {
            this.setState({errs: nextProps.errs})
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const profileData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            location: this.state.location,
            bio: this.state.bio,
        };

        this.props.createProfile(profileData, this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
        <div>
            <h1>Create Your Profile</h1>
            <br/>
            <form className="form" onSubmit={this.onSubmit}>
                <div className="create-profile-form">
            <div>
                First Name: 
                <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    required
                    />
            </div>
            <br/>
            <div>
            Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    required
                    />
            </div>
            <br/>
            <div>Username: 
                <input 
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    required
                    />
            </div>
            <br/>
            <div>Loaction (if you want): 
                <input 
                    type="text"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    required 
                    />
                </div>
                <br/>
            <div> Bio:
                <textarea
                    type="text"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    required
                    />
            </div>
            <br/>
                <input 
                    type='submit'
                    value="Submit"
                    />
                </div>
            </form>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    {createProfile})
    (withRouter(CreateProfile));





// import React , {  Fragment, useState, useEffect } from 'react';
// import { createProfile, getCurrentProfile } from '../../actions/profile';


// const CreateProfile = ({
//     createProfile,
//     getCurrentProfile,
//     profile: {profile, loading},
//     history
// }) => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         username: '',
//         location: '',
//         bio:''
//     });

//     const {
//             firstName,
//             lastName,
//             username,
//             location,
//             bio,
//     } = formData

//     //     setFormData({
//     //         firstName: loading || !profile.firstName ? '' : profile.firstName,
//     //         lastName: loading || !profile.lastName ? '' : profile.lastName,
//     //         username: loading || !profile.username ? '' : profile.username,
//     //         location: loading || !profile.location ? '' : profile.location,
//     //         bio: loading || !profile.bio ? '' : profile.bio
//     //     })
//     // }, [loading, getCurrentProfile]);

    
//     const onChange = e =>
//         setFormData({ ...formData, [e.target.name]: e.target.value});

//     const onSubmit = e => {
//         e.preventDefault();
//         createProfile(formData, history)
//     };
    
//     useEffect(() => {
//         getCurrentProfile();
//     }, [getCurrentProfile]);
    

//     return (
        
//         <Fragment>
//             <h1>Create Your Profile</h1>
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

// export default CreateProfile;