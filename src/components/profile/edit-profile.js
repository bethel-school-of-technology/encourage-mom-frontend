import React from 'react';
import { getCurrentProfile } from '../../actions/profile'


const EditProfile = ({
    createProfile,
    getCurrentProfile
}) => {
    const [profileData, setProfileData] = useState({
        name: '',
        username: '',
        location: '',
        bio:''
    });



    const {name, username, location, bio } = profileData
    
    const onChange = e =>
        setprofileInfo({ ...profileData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        createProfile(profileData, history)
    };

    return (
        <Fragment>
            <h1>Edid Your Profile</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="create-profile-form">
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => onChange(e)}
                    required
                    />
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    required
                    />
                <input 
                    type="text"
                    name="location"
                    value={location}
                    onChange={e => onChange(e)}
                    required 
                    />
                <textarea
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default EditProfile